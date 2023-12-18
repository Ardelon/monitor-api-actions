const axios = require("axios");
const { sendMail } = require("./sendMail");
const { logger } = require("./logger");
require("dotenv").config();

async function checkServiceStatus(url) {
  const time = new Date();
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      console.log(`The service at ${url} is up.`);
      logger(url, time, response.status);
    } else {
      sendMail(
        `Received status code ${response.status} from ${url}. Time : ${time}`
      );
      console.log(`Received status code ${response.status} from ${url}.`);
      logger(url, time, response.status);
    }
  } catch (error) {
    sendMail(`The service at ${url} is down. Error: ${error}. Time : ${time}`);
    logger(url, time, error);
    console.error(`The service at ${url} is down. Error: ${error}`);
  }
}

module.exports = { checkServiceStatus };
