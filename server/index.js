import express  from "express";
import bodyParser  from "body-parser";
import mongoose  from "mongoose";
import cors from 'cors';

import dashboardRoutes from './routes/dashboard.js';

const app = express();

app.use('/dashboard', dashboardRoutes);

app.use(bodyParser.json({limit: "15mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "15mb", extended: true}));
app.use(cors());

// atlas user: admin pass: D8XTkBeMQfxrNipm
// database: mongodb+srv://admin:D8XTkBeMQfxrNipm@embifi-customers.2ko4rgb.mongodb.net/?retryWrites=true&w=majority

const CONNECTION_URL = 'mongodb+srv://admin:D8XTkBeMQfxrNipm@embifi-customers.2ko4rgb.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {  useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log("Server running on port", PORT)))
    .catch((err) => console.log(err.message));
