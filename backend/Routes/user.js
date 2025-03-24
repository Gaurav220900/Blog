const express = require('express');
const router = express.Router();   
const mongoose = require('mongoose');   
const userModel = require('../src/model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!(email && password && username)) {
            res.status(400).send("All input is required");
        }
        const oldUser = await userModel.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });
        const token = jwt.sign(
            { user_id: user._id, email },
            'secretkey'
        );
        user.token = token;
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
});

router.post('/login',auth, async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(404).send("User not found");
        }
        
        if (user && (bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                'secretkey'
            );
            user.token = token;
            return res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;