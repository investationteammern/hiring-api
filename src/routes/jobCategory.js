import express from 'express';
import { createCategory } from '../controllers/job.js';


const router = express.Router();

router.post('/job', createCategory);

export default router; 