import type { RequestHandler } from "express";

export function catchNext(fn: (...args: Parameters<RequestHandler>) => Promise<any>) {
  const caughtNext: RequestHandler = (req, res, next) => fn(req, res, next).catch(next);
  return caughtNext;
}
