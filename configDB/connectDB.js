const  mongoose = require("mongoose");

const connectDB = async(DATABASE_URL)=>{
    try {
        const DB_OPTIONS={
            dbname:"nodejssturcture"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS,{
            useNewUrlPraser:true,
            useUnifiedTopology:true,
        });
        console.log("Connected Succesfully...");
    } catch (error) {
        console.log(error);
    }
}


module.exports= {connectDB}