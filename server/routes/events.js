import express from 'express';
import User from '../models/user';
import authenticate from '../middlewares/authenticate';

let router = express.Router();

router.post('/', authenticate, (req, res) => {
  // res.status(201).json({user: req.currentUser});
  res.status(201).json({success: true});
});

export default router;
