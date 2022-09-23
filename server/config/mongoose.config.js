const mongoose = require("mongoose");

//NAME YOUR DATABASE
const dbName = "budget";

//IF A DB BY THIS NAME DOES NOT EXIST WHEN RUNNING IT THE FIRST TIME THIS WILL CREATE IT.
mongoose
  .connect(`mongodb://127.0.0.1/${dbName}`, {
    //IMPORTANT!!! USUALLY /localhost/ IS USED INSTEAD OF 127.0.0.1
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`You are connected to the ${dbName} database cabron`);
  })
  .catch((err) => {
    console.log(`There was an error, read: ${err}`);
  });
