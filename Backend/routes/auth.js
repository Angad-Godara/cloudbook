const express = require('express');
const router = express.Router();
const user = require('../models/User')
const { body, validationResult } = require('express-validator');

// Adding a new user to the db using POST: /api/auth/createuser
router.post('/createuser', [

    // express validators
    body('email', 'Invalid Email').isEmail(),
    body('name', 'Please enter a valid name').isLength({ min: 3 }),
    body('password', 'Invalid pasowrd').isLength({ min: 5 })

], async (req, res) => {
    try {

        // checking the results of the validators
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // checking if their exists a user with the same email
        let User = await user.findOne({ email: req.body.email })

        if (User) {
            return res.status(400).json({ error: "Sorry for inconvenience but the email already exists" })
        }

        // creating a new user
        User = await user.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        res.json(User);

    } catch (err) {
        console.log(err);
        res.status(500).send("Some error occured")
    }
})

module.exports = router