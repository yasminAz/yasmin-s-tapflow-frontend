const express = require("./node_modules/express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { createServer } = require("http");
const app = express();
const dev = app.get("env") !== "production";
const path = require("path");
const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

if (!dev) {
  app.use(express.static(path.resolve(__dirname, "build")));
  app.use("*", express.static(path.resolve(__dirname, "build")));
  app.get("*", (req, res) => {
    res.send(path.resolve(__dirname, "build", "index.html"));
  });
}

if (dev) {
  app.use(morgan("dev"));
}

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

/** 

const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const inputCheck = (data) => {
  let errors = {};
  if (isEmpty(data.name)) errors.name = "Must not be empty";
  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email address";
  }
  if (isEmpty(data.message)) errors.message = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

app.post("/email", (req, res) => {
  //SENDING EMAIL
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };
  console.log(data);

  const { valid, errors } = inputCheck(data);
  if (!valid) return res.status(400).json(errors);

  const html = `
  <h3>Contact Details</h3>
  <ul style="font-size: 120%; font-family: "Trebuchet MS">
      <li>name: ${data.name}</li>
      <li>email: ${data.email}</li>
      <li>phone: ${data.phone}</li>
  </ul>
  <h3 style="font-size: 120%; font-family: "Trebuchet MS">Message</h3>
  <div style="width: 90%;text-align: "justify";
  text-justify: "inter-word";">
    <p>${data.message}</p>
  </div>
  
 `;

  sendMail(data.email, data.message, html, (err, data) => {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
      console.log("error");
    } else {
      res.json({ message: "Email Sent!!!" });
      console.log("sent");
    }
  });
});
*/
const server = createServer(app);
server.listen(PORT, () => console.log(`Server is starting on PORT ${PORT}`));

/**
 *         
 * 
 *  <h3>Contact Details</h3>
  <ul style="font-size: 120%; font-family: "Trebuchet MS">
      <li>name: ${data.name}</li>
      <li>email: ${data.email}</li>
      <li>phone: ${data.phone}</li>
  </ul>
  <h3 style="font-size: 120%; font-family: "Trebuchet MS">Message</h3>
  <p>${data.message}</p>
 * 
 * 
 * 
 * <div
    style="
      position: relative;
      background-color: hsl(204, 100%, 64%);
      width: 100%;
      height: 7%;
      color: white;
      font-family: sans-serif;
      font-size: 1.19em;
    "
  >
    <span
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      "
      >Contact Details</span
    >
  </div>

  <ul style="font-size: 120%; font-family: "Trebuchet MS">
    <li>name: ${data.name}</li>
    <li>email: ${data.email}</li>
    <li>phone: ${data.phone}</li>
  </ul>
  <div
    style="
      position: relative;
      background-color: hsl(204, 100%, 64%);
      width: 100%;
      height: 7%;
      color: white;
      font-family: sans-serif;
      font-size: 1.19em;
    "
  >
    <span
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      "
      >Message</span
    >
  </div>
  <p style="font-size: 120%; font-family: "Trebuchet MS">${data.message}</p>
 */
