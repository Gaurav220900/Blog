import React from "react";
import styles from './css/showblog.module.css';
import { useLocation } from "react-router-dom";

const ShowBlog = () => {
    const location = useLocation();
    const {id,title,url,content} = location.state;
        return (
            <div className={styles.card}>
            <img src={url} alt="blog-image"/>
            <h2>{title}</h2>
            <p>{content}</p>
            <h3>Add a comment</h3>
            <input type="text" />
            </div>
    );
};

export default ShowBlog;