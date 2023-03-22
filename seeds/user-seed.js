const { User } = require("../models");

const userData = [
    {
      name: "Serapio",
      email: "serapio@gmail.com",
      password: "pass123",
    },
    {
      name: "Tin",
      email: "tin@gmail.com",
      password: "pass123",
    },
    {
      name: "Nate",
      email: "nate@gmail.com",
      password: "pass123",
    },
    {
        name: "Nick",
        email: "nick@gmail.com",
        password: "pass123",
    }
  ];

const seedUser = () => User.bulkCreate(userData, {
    // REMINDER: needed this individualHooks to check password with encrypted pass
    individualHooks: true
  });
  
  module.exports = seedUser;