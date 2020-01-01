const fs = require("fs");
const path = require("path");
const { denormalize } = require("graphql-norm");
const { parse } = require("graphql");

const queryText = fs.readFileSync(
  path.join(__dirname, "./denorm-query.graphql"),
  "utf8"
);

const cache = require("./denorm-cache.json");

const queryDoc = parse(queryText);
const denormResult = denormalize(queryDoc, {}, cache);

const setToJSON = (k, v) => (v instanceof Set ? Array.from(v) : v);
console.log("denormResult", JSON.stringify(denormResult, setToJSON));

const data = JSON.stringify(denormResult.data);
fs.writeFileSync(path.join(__dirname, "./denorm-result-data.json"), data);
