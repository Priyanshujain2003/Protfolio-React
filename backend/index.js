const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
const connectDB = require("./dbconfig")
const VisitorsModel = require("./schemas/Visitors")

const port = 8800;

app.use(cors());
connectDB();
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is Running is port: ${port}`);
})


let visitors = [];

app.post("/", async (req, res) => {
    const data = req.body;
    if (data.email) {
        const visitor = await VisitorsModel.findOne({ email: data.email.toLowerCase() });
        if (visitor) {
            res.send({ success: false, message: "user already exit" })
        }
        else {
            const visitorData = {
                name: data.name,
                email: data.email.toLowerCase(),
                phone_number: data.phone_number,
                text: data.text
            }

            const newVisitor = await VisitorsModel.create(visitorData);
            res.send({ success: true, message: "Your Given Data Successfully Submit", data: newVisitor })
        }
    }
    else {
        res.send({ success: false, message: "no data found" })
    }
    console.log(data)
})