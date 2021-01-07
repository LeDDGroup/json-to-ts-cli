#!/usr/bin/env node
const vm = require("vm");
const JsonToTS = require("json-to-ts");

async function readStdIn() {
  return new Promise((resolve, reject) => {
    let content = "";
    process.stdin.on("data", (chunk) => {
      content += chunk;
    });

    process.stdin.on("error", (error) => {
      reject(error);
    });

    process.stdin.on("end", () => {
      resolve(content);
    });
  });
}

function parseJsonLike(jsonStr) {
  const context = { result: "" };
  const code = `result=${jsonStr}`;
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.result;
}

async function run() {
  const content = await readStdIn();
  const json = parseJsonLike(content);
  const interfaces = JsonToTS(json);
  const result = interfaces.join("\n");
  console.log(result);
}

run().catch((err) => console.error(err));
