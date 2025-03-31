import React, { useContext} from "react";
import styles from './css/showblog.module.css';
import { useLocation, Link } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import { FaUserCircle } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import api from "../api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
const ShowBlog = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {isLoggedIn} = useContext(AuthContext);
    const deletedBlog = async () => {
            await api.delete(`/blog/${id}`);
            navigate('/');
        }
    
    const {id,title,url,username, content, userId} = location.state;
    
        return (
            <div className={styles.card}>
            <FaUserCircle size={30} color="gray" />
            <span style={{marginLeft: '5px', position:'relative', top: '-12px', fontWeight: 'bold'}}>{username}</span>
            {isLoggedIn && isLoggedIn._id === userId._id && <span style={{float: 'right', display: 'flex', gap: '10px', position: 'relative', top: '6px'}}>
            <Link to={`/blog/edit/${id}`}
                state={{id,title,url,username,content}}
                style={{marginRight: '5px', backgroundColor:'white', cursor: 'pointer', border: 'none'}}>
                <FaEdit size={20} color="gray" />
            </Link>
            <button onClick={deletedBlog}style={{backgroundColor:'white', cursor: 'pointer', border: 'none'}}>
                <FaTrash size={20} color="gray" />
            </button>
            </span>}
            <img src={url} alt="blog-image"/>
            <h2>{title}</h2>
            <p>{content}</p>
            <Comment postId={id} />
            </div>
    );
};

export default ShowBlog;