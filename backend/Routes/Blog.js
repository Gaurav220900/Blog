const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const blogModel = require('../src/model/blog');

router.post('/blog',async(req,res) => {
    try{
    const newBlog = new blogModel(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json({
        message : 'blog added successfully',
        blog : savedBlog
    })
    }catch(err){
        res.status(500).json({
            message : 'Error adding blog',
            error : err.message
        })
    }
});

router.get('/blogs',async(req,res) => {
    try{
        const blogs = await blogModel.find().populate("userId", "username");
        return res.status(200).json({
            message: "blogs received successfully",
            blogs: blogs
        })
    }catch(err){
        return res.status(500).json({
        message : "error getting blogs",
        error : err.message
        })
        
    }
});

router.put('/blog/:id',async(req,res) => {

    const {id} = req.params;
    const {title,url,content} = req.body;
    try{
        const updatedBlog = await blogModel.findByIdAndUpdate(id,{
            title : title,
            url : url,
            content : content
        },{new:true});
        return res.status(200).json({
            message : "blog updated successfully",
            blog : updatedBlog
        })  
    }catch(err){
        return res.status(500).json({
            message : "error updating blog",
            error : err.message
        })
    }
});

module.exports = router;
