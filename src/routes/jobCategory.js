import express from 'express';
import { createCategory, exportData, listCategories } from '../controllers/job.js';


const router = express.Router();

router.post('/job', createCategory);
router.get('/categories', listCategories);
router.get('/categories/export', exportData);
export default router; 