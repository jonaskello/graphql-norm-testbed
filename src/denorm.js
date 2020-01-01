const fs = require("fs");
const { denormalize } = require("graphql-norm");
const { parse } = require("graphql");

const query = require("./denorm-query");
const cache = require("./denorm-cache.json");

const queryDoc = parse(query);
const denormResult = denormalize(queryDoc, {}, cache);

const setToJSON = (k, v) => (v instanceof Set ? Array.from(v) : v);
console.log("denormResult", JSON.stringify(denormResult, setToJSON));

const data = JSON.stringify(denormResult.data);
fs.writeFileSync("./denorm-result-data.json", data);
