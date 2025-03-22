import React from "react";
import styles from './css/showblog.module.css';
import { useLocation } from "react-router-dom";
import Comment from "../components/Comment/Comment";
const ShowBlog = () => {
    const location = useLocation();
    const {id,title,url,content} = location.state;
        return (
            <div className={styles.card}>
            <img src={url} alt="blog-image"/>
            <h2>{title}</h2>
            <p>{content}</p>
            <Comment />
            </div>
    );
};

export default ShowBlog;