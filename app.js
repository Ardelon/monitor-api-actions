const { checkServiceStatus } = require("./checkServices");

console.log(JSON.stringify(process.env.SERVICE_LIST));
const serviceList = JSON.parse(process.env.SERVICE_LIST);
serviceList.forEach((serviceUrl) => {
  checkServiceStatus(serviceUrl);
});
