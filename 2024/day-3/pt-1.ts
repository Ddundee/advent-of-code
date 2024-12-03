import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const inputPath = resolve(Deno.cwd(), "input.txt");
const testInputPath = resolve(Deno.cwd(), "test_input.txt");

const input = readFileSync(inputPath, "utf-8");

const regex = /mul\(\d{1,3},\d{1,3}\)/g
const data = (input.match(regex) as string[]).map(mul => mul.slice(4, mul.length - 1).split(",").map(num => +num).reduce((prev, curr) => prev * curr)).reduce((prev, curr) => prev + curr)

const result = data;
console.log(result)
// 175700056