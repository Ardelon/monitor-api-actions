const fs = require("fs");
const path = require("path");
const logger = (testUrl, time, data) => {
  const url = new URL(testUrl);
  console.log(url.hostname);
  fs.appendFile(
    path.join(__dirname + "/logs" + `/${url.hostname}.txt`),
    `${time}, ${JSON.stringify(data)}\n`,
    (err) => {
      if (err) console.log(err);
    }
  );
};

module.exports = { logger };
