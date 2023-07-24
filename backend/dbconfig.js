const mongoose = require ("mongoose")

const connectDB = async () =>
{
    mongoose.connect("mongodb+srv://hellopriyanshu2003:qdPpUQpuNihuEE5D@cluster0.qxkeucs.mongodb.net/prot?retryWrites=true&w=majority").then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log("err" , err);
    })
}

module.exports = connectDB;