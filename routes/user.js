import express from 'express'
import { contact } from '../controllers/user.js'

const router = express.Router();

// contactMe
router.post('/contact', contact);

export default router