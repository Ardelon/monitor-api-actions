const fs = require("fs");

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      else return resolve(data);
    });
  });
};

const writeFile = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, "utf8", (err) => {
      if (err) reject(err);
      else return resolve();
    });
  });
};

module.exports = { readFile, writeFile };
