# json-to-ts-cli

Simple cli for https://github.com/MariusAlch/json-to-ts

## Installing

```sh
git clone https://github.com/LeDDGroup/json-to-ts-cli.git
cd json-to-ts-cli
npm ci
npm install --global . # or npm link
```

## Usage

Pipe json (or javascript object) through the stdin and receive typescript from the stdout:

```sh
json-to-ts-cli < example-output.json > definitions.d.ts
```
