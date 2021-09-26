const bcrypt = require("bcryptjs");
const Users = [
  {
    name: "admin",
    email: "shivam@g.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "shivam",
    email: "shivam1@g.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = Users;
