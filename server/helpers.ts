import { readFileSync } from "fs";

export function readFileAsString(path: string) {
  return readFileSync(path).toString();
}
