import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const inputPath = resolve(Deno.cwd(), "input.txt");
const testInputPath = resolve(Deno.cwd(), "test_input.txt");

const input = readFileSync(inputPath, "utf-8");

const data = input.split("\n").map(line => line.split(" ").map(point => +point));

const prod = data.filter(line => line.every((val, index) => index == 0 || [1, 2, 3].includes(Math.abs(val - line[index - 1]))) && (line.every((val, index) => index == 0 || val > line[index - 1]) || line.every((val, index) => index == 0 || val < line[index - 1])))

const result = prod.length;
console.log(result)
// 442