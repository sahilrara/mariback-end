const express = require("express");
const userrouts = require("./routes/web");
const model = require("./models/UserShema");
const { connectDB } = require("./configDB/connectDB");
const app = express();

const DATABASE_URL = "mongodb://localhost:27017/";

const port = 4500;

connectDB(DATABASE_URL);

app.use(express.json());

app.post("/user", (req, res) => {
  try {
    const { fullname, email, pasword } = req.body;
    const result = model.create({
      fullname: fullname,
      email: email,
      pasword: pasword,
    });
    res
      .status(201)
      .json({ success: true, message: `${fullname} signup successfully` });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
