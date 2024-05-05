const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://sherazmoiz9:FMGxSK0XXAOR42S0@cluster0.l6qfsrz.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
