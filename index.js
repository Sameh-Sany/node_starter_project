const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const db = require("./src/config/db");

// load env variables
dotenv.config();

// use middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());

// connect to database
db.connect();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
