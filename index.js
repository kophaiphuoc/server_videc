const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const routervidec = require('./routers/call_api_router')

app.use(cors());
app.use(express.json());
app.use(morgan('common'));

app.use('/v1',routervidec)

app.listen(3000, () => {
    console.log("listen on port ")
})