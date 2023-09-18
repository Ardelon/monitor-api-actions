const { checkServiceStatus } = require("./checkServices");

const serviceListString = process.env.SERVICE_LIST;
const serviceList = serviceListString.split(",");
console.log(
  process.env.SERVICE_LIST,
  process.env.MAIL_ADDRES,
  process.env.MAIL_ADDRESS
);

serviceList.forEach((serviceUrl) => {
  checkServiceStatus(serviceUrl);
});
