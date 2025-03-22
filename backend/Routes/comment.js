const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const commentModel = require('../src/model/comment');
const userModel = require('../src/model/user');

router.post('/comment',async(req,res) => {
    try{
    const newComment = new commentModel(req.body);
    const savedComment = await newComment.save();
    res.status(201).json({
        message : 'comment added successfully',
        comment : savedComment
    })
    }catch(err){
        res.status(500).json({
            message : 'Error adding comment',
            error : err.message
        })
    }
});
router.get('/comments',async(req,res) => {
    try{
        const comments = await commentModel.find({});
        return res.status(200).json({
            message: "comments received successfully",
            comments: comments
        })
    }catch(err){
        return res.status(500).json({
        message : "error getting comments",
        error : err.message
        })
        
    }
});
module.exports = router;