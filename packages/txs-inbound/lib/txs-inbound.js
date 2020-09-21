
'use strict';
const fs = require("fs");
const prettier = require("prettier");

const code = fs.existsSync(process.argv[2]) ? fs.readFileSync(process.argv[2], "utf-8") : process.argv.slice(2).join(" ").replace(/\\n/g, "\n");

console.log(prettier.format(code, { parser: "xml", plugins: ["."] }));

module.exports = txsInbound;