const jwt = require('jsonwebtoken');
const epress = require('express');

const auth = (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).send({error: 'No token provided'}); 
    } 

    const token = authorization.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send({ error: 'Invalid token' });
    }
};

module.exports = auth;