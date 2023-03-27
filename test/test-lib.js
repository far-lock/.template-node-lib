const tap = require("tap");
const { sum } = require("../index.js");

tap.equal(sum(1, 3), 4);

