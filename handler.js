"use strict";

module.exports.hello = (event, context, callback) => {
  console.log("Hello, world!");
  callback(null);
};