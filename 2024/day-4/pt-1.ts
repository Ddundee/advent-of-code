import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const inputPath = resolve(Deno.cwd(), "input.txt");
const testInputPath = resolve(Deno.cwd(), "test_input.txt");

const input = readFileSync(inputPath, "utf-8");



const data = input.split("\n").map(line => line.split(""))
function checkValidPoint(r: number, c: number): boolean {
    return r >= 0 && c >= 0 && r < data.length && c < data[0].length
}

let count = 0;
const dir = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
]

for (let r = 0; r < data.length; r++) {
    for (let c = 0; c < data[0].length; c++) {
        if (data[r][c] !== "X") continue;
        dir.forEach(([dirR, dirC]) => {
            let dr = dirR, dc = dirC;
            for (const item of ["M", "A", "S"]) {
                if (!checkValidPoint(r + dr, c + dc) || data[r + dr][c + dc] != item) return;
                dr += dirR;
                dc += dirC;
            }
            count++;

        })
    }
}

const result = count;
console.log(result)
// 2549