import styles from './Blog.module.css';
import React, {useState} from 'react';
const Blog = ({id,title,url,content}) => {
    
  const [expanded, setExpanded] = useState(false);

  const getPreview = (text, wordLimit) => {
      const words = text.split(" ");
      return words.length > wordLimit 
          ? words.slice(0, wordLimit).join(" ") + "..."
          : text;
  };

        return (
        <div className={styles.card}>
          <button 
            style={{ border: 'none', background: 'none', cursor: 'pointer'}}
            onClick={() => }
            >
        <div>
            <li >
                <img src={url} alt={title} className={styles.img}/>
                <h2>{title}</h2>
                <p style={{textAlign: 'justify'}}>{expanded ? content : getPreview(content, 50)}</p>

            {content.split(" ").length > 50 && (
                <button 
                    onClick={() => setExpanded(!expanded)} 
                    style={{ border: "none", background: "none", color: "blue", cursor: "pointer" }}
                >
                    {expanded ? "Show Less" : "Read More"}
              </button>
            
      )}
            </li>
        </div>
        </button>
        </div>
    )
}

export default Blog;