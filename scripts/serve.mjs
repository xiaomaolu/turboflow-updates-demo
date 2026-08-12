import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

import { distDir } from "./build.mjs";

const previewPort = Number.parseInt(process.env.TURBOFLOW_PREVIEW_PORT || "4173", 10);
if (!Number.isInteger(previewPort) || previewPort < 1 || previewPort > 65535) {
  throw new Error("TURBOFLOW_PREVIEW_PORT must be an integer between 1 and 65535");
}

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"]
]);

function send(response, statusCode, body, headers = {}) {
  response.writeHead(statusCode, {
    "cache-control": "no-store",
    "content-type": "text/plain; charset=utf-8",
    ...headers
  });
  response.end(body);
}

function resolveRequestPath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const relativePath = decoded.replace(/^\/+/, "");
  const target = path.resolve(distDir, relativePath || ".");
  const relativeToDist = path.relative(distDir, target);
  if (relativeToDist.startsWith(`..${path.sep}`) || path.isAbsolute(relativeToDist)) {
    throw new Error("request path escapes dist");
  }
  return target;
}

const server = createServer(async (request, response) => {
  if (!request.url || !["GET", "HEAD"].includes(request.method || "")) {
    send(response, 405, "Method Not Allowed\n", { allow: "GET, HEAD" });
    return;
  }

  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
    let target = resolveRequestPath(requestUrl.pathname);
    let fileStats = await stat(target);
    if (fileStats.isDirectory()) {
      target = path.join(target, "index.html");
      fileStats = await stat(target);
    }
    if (!fileStats.isFile()) throw new Error("not a regular file");

    const contents = await readFile(target);
    response.writeHead(200, {
      "cache-control": "no-store",
      "content-length": contents.byteLength,
      "content-type": contentTypes.get(path.extname(target).toLowerCase()) || "application/octet-stream"
    });
    response.end(request.method === "HEAD" ? undefined : contents);
  } catch (error) {
    const malformedPath = error instanceof URIError || error?.message === "request path escapes dist";
    send(response, malformedPath ? 400 : 404, malformedPath ? "Bad Request\n" : "Not Found\n");
  }
});

server.listen(previewPort, "127.0.0.1", () => {
  console.log(`TurboFlow Updates preview: http://127.0.0.1:${previewPort}/updates/`);
});
