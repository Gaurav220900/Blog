import styles from './Blog.module.css';
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Blog = ({id,title,url,content,username}) => {
    
  const [expanded, setExpanded] = useState(false);

  const getPreview = (text, wordLimit) => {
      const words = text.split(" ");
      return words.length > wordLimit 
          ? words.slice(0, wordLimit).join(" ") + "..."
          : text;
  };

        return (
        <div className={styles.card}>
        <div style={{cursor: 'pointer'}}>
        <FaUserCircle size={30} color="gray" />
        <span style={{marginLeft: '5px', position:'relative', top: '-12px', fontWeight: 'bold'}}>{username}</span>

          <Link
            style={{textDecoration: 'none'}}
            to={`/blog/${id}`}
            state = {{id,title,url, username, content}}
           >
        
            
                <img src={url} alt={title} className={styles.img}/>
                <h2>{title}</h2>
                </Link> 
                </div>
                <p style={{textAlign: 'justify'}}>{expanded ? content : getPreview(content, 50)}</p>
             
            {content.split(" ").length > 50 && (
                <button 
                    onClick={() => setExpanded(!expanded)} 
                    style={{ border: "none", background: "none", color: "blue", cursor: "pointer" }}
                >
                    {expanded ? "Show Less" : "Read More"}
              </button>
        
      )}
            
        </div>
        
       
    )
}

export default Blog;