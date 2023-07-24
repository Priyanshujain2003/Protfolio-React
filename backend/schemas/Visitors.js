const mongoose = require("mongoose")

const VisitorSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone_number : Number,
    text : String
});

const VisitorsModel = new mongoose.model("visitors" , VisitorSchema);

module.exports = VisitorsModel;