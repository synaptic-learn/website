import { readFileSync } from "fs";

import type { RequestHandler } from "express";

export function readFileAsString(path: string) {
  return readFileSync(path).toString();
}

export function catchNext(fn: (...args: Parameters<RequestHandler>) => Promise<any>) {
  const caughtNext: RequestHandler = (req, res, next) => fn(req, res, next).catch(next);
  return caughtNext;
}
