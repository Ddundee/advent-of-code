import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const inputPath = resolve(Deno.cwd(), "input.txt");
const testInputPath = resolve(Deno.cwd(), "test_input.txt");
// DO NOT CHANGE ABOVE

const input = readFileSync(inputPath, "utf-8");

const mappedArray = input.split("\n").map((line: string) => line.split("   "))
const divArray: number[][] = [[], []]
for (let i = 0; i < mappedArray.length; i++) {
    divArray[0].push(+mappedArray[i][0])
    divArray[1].push(+mappedArray[i][1])
}
// const [left, right] = divArray.map(arr => arr.sort());
const sorted = [divArray[0].sort(), divArray[1].sort()]
let acc = 0;
for (let i = 0; i < sorted[0].length; i++) {
    acc += Math.abs(sorted[0][i] - sorted[1][i])
}

// DO NOT CHANGE BELOW
const result = acc

console.log(result)

// ANSWER: 1579939