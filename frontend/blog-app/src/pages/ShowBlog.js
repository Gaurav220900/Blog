import React from "react";
import styles from './css/showblog.module.css';
import { useLocation, Link } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import { FaUserCircle } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
const ShowBlog = () => {
    const location = useLocation();
    const {id,title,url,username, content} = location.state;
        return (
            <div className={styles.card}>
            <FaUserCircle size={30} color="gray" />
            <span style={{marginLeft: '5px', position:'relative', top: '-12px', fontWeight: 'bold'}}>{username}</span>
            <span style={{float: 'right', display: 'flex', gap: '10px', position: 'relative', top: '10px'}}>
            <Link to={`blog/edit/${id}`}
                state={{title,url,content}}
                style={{marginRight: '5px', backgroundColor:'white', cursor: 'pointer', border: 'none'}}>
                <FaEdit size={20} color="gray" />
            </Link>
            <Link style={{backgroundColor:'white', cursor: 'pointer', border: 'none'}}><FaTrash size={20} color="gray" /></Link>
            </span>
            <img src={url} alt="blog-image"/>
            <h2>{title}</h2>
            <p>{content}</p>
            <Comment />
            </div>
    );
};

export default ShowBlog;