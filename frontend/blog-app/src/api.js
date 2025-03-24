import React from "react";
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:4000',
    headers: {
        "Content-Type": "application/json",
      }
      
    
});

export default api;
