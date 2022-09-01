const mongoose = require("mongoose");
const { MONGO_URI } = require("./constants.js");

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connection OK!!");
  } catch (e) {
    console.error(e);
    setTimeout(connect, 3000);
  }
};

const disconnect = async () => {
  try {
    await mongoose.connection.close();
    console.log("Disconnected OK!!");
  } catch (e) {
    console.error(e);
  }
};

connect();

module.exports = { connect, disconnect };
