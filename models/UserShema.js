const mongoose = require("mongoose");

const userModel = mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        pasword: { type: String, required: true },
    }
);

module.exports= mongoose.model("usermodel",userModel)