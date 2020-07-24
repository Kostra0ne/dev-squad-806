const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
  })
  .catch((error) => {
    console.log(`An error occured ${error}`);
  });
