import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());

// MongoDB connection
const CONNECTION_URL =
  "mongodb+srv://admin-embifi:rbym1F9SEVCDN5zq@embifi-mock.zzu8t2l.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log("Server running on port", PORT))
  )
  .catch((err) => console.log(err.message));

const loanApplicationSchema = new mongoose.Schema({
  identifierNumber: Number,
  businessDocument: String,
  aadharNumber: String,
  buildingNumber: String,
  pincode: String,
  city: String,
  state: String,
});

const registerSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  emailId: String,
  dateOfBirth: Date,
  password: String,
  businessType: String,
  identifierNumber: Number,
});

// Create a user model
const RegisterUser = mongoose.model("RegisterUser", registerSchema);
const LoanApplication = mongoose.model(
  "LoanApplication",
  loanApplicationSchema
);

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email 
    let user = await  RegisterUser.findOne({ emailId: email });

    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }

    // Compare the password
    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT
    const token = jwt.sign({ email: user.emailId }, "secret-key");

    // Return the JWT
    res.json({ token });
  } catch (error) {
    console.log(error);
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
app.post("/registerform", async (req, res) => {
  const { name, mobileNumber, emailId, dateOfBirth, password, businessType } =
    req.body;

  try {
    // Check if the user already exists
    const existingUser = await  RegisterUser.findOne({ mobileNumber });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const identifierNumber = generateIdentifierNumber();

    // Create a new user
    const newUser = new RegisterUser({
      name,
      mobileNumber,
      emailId,
      dateOfBirth,
      password,
      businessType,
      identifierNumber,
    });
    await newUser.save();

    // Generate a JWT
    const token = jwt.sign(
      { identifierNumber: newUser.identifierNumber },
      "secret-key"
    );

    // Return the JWT and identifier number
    res.json({ token, identifierNumber });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Register new user loan application API
app.post("/registerformloanapplication", async (req, res) => {
  const {
    businessDocument,
    aadharNumber,
    buildingNumber,
    pincode,
    city,
    state,
  } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await  RegisterUser.findOne({ aadharNumber });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Generate a unique identifier number for the user application
    const identifierNumber = generateIdentifierNumber();

    // Create a new loan application
    const newLoanApplication = new LoanApplication({
      identifierNumber,
      businessDocument,
      aadharNumber,
      buildingNumber,
      pincode,
      city,
      state,
    });
    await newLoanApplication.save();

    // Return the identifier number
    res.json({ identifierNumber });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Dashboard data API
app.get("/dashboard", async (req, res) => {
  try {
    // Verify the JWT
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const decoded = jwt.verify(token, "secret-key");

    // Retrieve the user's data from the database based on the email
    const user = await RegisterUser.findOne({ emailId: decoded.email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Extract the required fields from the user object
    const userData = {
      name: user.name,
      mobileNumber: user.mobileNumber,
      businessType: user.businessType,
    };

    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

