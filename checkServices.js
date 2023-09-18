const axios = require("axios");
const { sendMail } = require("./sendMail");

async function checkServiceStatus(url) {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      console.log(`The service at ${url} is up.`);
    } else {
      sendMail(
        `Received status code ${
          response.status
        } from ${url}. Time : ${new Date()}`
      );
      console.log(`Received status code ${response.status} from ${url}.`);
    }
  } catch (error) {
    const time = new Date();
    sendMail(`The service at ${url} is down. Error: ${error}. Time : ${time}`);
    // console.error(`The service at ${url} is down. Error: ${error}`);
  }
}

module.exports = { checkServiceStatus };
