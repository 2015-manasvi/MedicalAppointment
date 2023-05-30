require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const patients = require("./routers/patients");
const doctors = require("./routers/doctors");
const appointments = require("./routers/appointments");

const auth = require("./routers/auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();

app.use("/api", patients);
app.use("/api", doctors);
app.use("/api", appointments);

app.use("/auth", auth);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
