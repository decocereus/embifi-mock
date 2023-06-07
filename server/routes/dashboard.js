import express from 'express';
import { getDashboard } from '../controllers/dashboard.js';

const router = express.Router();

router.get('/', getDashboard);
// http://localhost:5000/dashboard
export default router