const { checkServiceStatus } = require("./checkServices");
require("dotenv").config();

console.log(process.env.SERVICE_LIST);
const serviceList = JSON.parse(process.env.SERVICE_LIST);
serviceList.forEach((serviceUrl) => {
  checkServiceStatus(serviceUrl);
});
