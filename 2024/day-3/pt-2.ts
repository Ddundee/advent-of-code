import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const inputPath = resolve(Deno.cwd(), "input.txt");
const testInputPath = resolve(Deno.cwd(), "test_input.txt");

const input = readFileSync(inputPath, "utf-8");

const regex = /(mul\(\d{1,3},\d{1,3}\))|do\(\)|don't\(\)/g
const data = (input.match(regex) as string[])

let acc = 0;
let cont = true;
data.forEach((val) => {
    if (val == "do()") cont = true;
    else if (val === "don't()") {
        cont = false;
    }
    else if (val.startsWith("mul") && cont) {
        console.log(val)
        acc += val.slice(4, -1).split(",").map(Number).reduce((prev, curr) => prev * curr)
    }
})
const result = acc;
console.log(result)
// 71668682