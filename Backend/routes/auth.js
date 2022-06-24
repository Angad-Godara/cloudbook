const express = require('express');
const router = express.Router();
const user = require('../models/User')
const { body, validationResult } = require('express-validator');

// Adding a new user to the db using POST: /api/auth
router.post('/', [
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 5 })
], (req, res) => {
    console.log(req.body);
    const User = user(req.body);
    User.save();
    res.json("user Inserted")
})

module.exports = router