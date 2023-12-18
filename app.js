const { checkServiceStatus } = require("./checkServices");

const serviceListString = process.env.SERVICE_LIST;
const serviceList = serviceListString.split(",");

serviceList.forEach((serviceUrl) => {
  checkServiceStatus(serviceUrl);
});
