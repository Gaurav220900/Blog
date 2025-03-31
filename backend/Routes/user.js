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
        const oldUser = await userModel.findOne({ email });
        if (oldUser) {
            return res.status(409).message("User Already Exist. Please Login");
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
        await user.save();
        return res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(404).send("User not found");
        }
        
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { user_id: user._id, email },
                'secretkey'
            );
            user.token = token;
            await user.save();
            return res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});


router.post('/logout',  async (req, res) => {
    try {
        const { email } = req.body.user; // Get the email or user ID from the request body
        const user = await userModel.findOne({ email });
        // Set token to null and save the updated user
        user.token = null;
        await user.save();

        res.status(200).json({ message: "User logged out successfully" });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;