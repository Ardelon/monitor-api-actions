const { checkServiceStatus } = require("./checkServices");
require("dotenv").config();

const serviceList = JSON.parse(process.env.SERVICE_LIST);
serviceList.forEach((serviceUrl) => {
  checkServiceStatus(serviceUrl);
});
