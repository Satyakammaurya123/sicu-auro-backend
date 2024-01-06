
const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected To MongoDB Database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
