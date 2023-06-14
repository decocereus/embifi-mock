const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const userApplicationSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  emailID: String,
  dateOfBirth: Date,
  businessType: String,
  businessDocument: String,
  aadharNumber: String,
  buildingNumber: String,
  pincode: String,
  city: String,
  state: String,
});

// Create a user model
const User = mongoose.model("User", userSchema);

const userApplication = mongoose.model(
  "UserApplication",
  userApplicationSchema
);

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Login API
app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a JWT
    const token = jwt.sign({ email: user.email }, "secret-key");

    // Return the JWT
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Function to generate a unique identifier number
function generateIdentifierNumber() {
  // Logic to generate a unique identifier number
  // This can be a simple random number generation or a more complex algorithm

  const randomNumber = Math.floor(Math.random() * 1000000) + 1; // Generate a random number between 1 and 1,000,000

  const timestamp = Date.now(); // Get the current timestamp

  const identifierNumber = `${randomNumber}${timestamp}`; // Combine the random number and timestamp

  return identifierNumber;
}

// Register new user API
app.post("/registerformloanapplication", async (req, res) => {
  const {
    name,
    mobileNumber,
    dateOfBirth,
    businessType,
    businessDocument,
    aadharNumber,
    buildingNumber,
    pincode,
    city,
    state,
  } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ mobileNumber });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Generate a unique identifier number for the user application
    const identifierNumber = generateIdentifierNumber();

    // Create a new user
    const newUser = new User({
      name,
      mobileNumber,
      dateOfBirth,
      businessType,
      businessDocument,
      aadharNumber,
      buildingNumber,
      pincode,
      city,
      state,
      identifierNumber,
    });
    await newUser.save();

    // Generate a JWT
    const token = jwt.sign(
      { aadharNumber: newUser.aadharNumber },
      "secret-key"
    );

    // Return the JWT and identifier number
    res.json({ token, identifierNumber });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Dashboard data API
app.get("/dashboard", (req, res) => {
  // Verify the JWT
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  jwt.verify(token, "secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Retrieve the user's loan application data from the database
    const userData = {
      email: decoded.email,
      loanApplications: [
        // Fetch loan applications from the database
        // You can use the user's email to query the loan applications associated with that user
      ],
    };

    res.json(userData);
  });
});

//
