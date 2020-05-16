#!/usr/bin/env node
const npm = require("npm");

const[,, ...args] = process.argv;

npm.load();

npm.load(() => npm.run("build"));
npm.load(() => npm.run("start"));


