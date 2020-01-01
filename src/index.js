const { normalize, denormalize, merge } = require("graphql-norm");
const { parse } = require("graphql");

// A plain JS object to hold the normalized responses
let cache = {};

// Now we can now use denormalize to read a query from the cache
const query2 = `
    query GetCountry2($code: String!) {
      country(code: $code) {__typename code name}
    }`;
const query2Doc = parse(query2);
const denormResult = denormalize(query2Doc, { code: "SE" }, cache);

const setToJSON = (k, v) => (v instanceof Set ? Array.from(v) : v);
console.log("denormResult", JSON.stringify(denormResult, setToJSON));
