const { checkServiceStatus } = require("./checkServices");
console.log("selam");
const serviceListString = process.env.SERVICE_LIST;
const serviceList = serviceListString.split(",");

serviceList.forEach((serviceUrl) => {
  checkServiceStatus(serviceUrl);
});
