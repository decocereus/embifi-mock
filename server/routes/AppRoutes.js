import express from 'express';
import { getUser, createUser } from '../controllers/AppRouteController.js';

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser)
// http://localhost:5000/dashboard
export default router