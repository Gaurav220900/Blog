import React, {useState} from "react";
import styles from '../components/AddBlog/AddBlog.module.css';
import api from "../api";
import { useLocation, useNavigate, Link } from "react-router-dom";
const EditBlog = () => {

    const location = useLocation();
    
    const {id,title,url,username, content} = location.state;
    const navigate = useNavigate();
    const [newTitle, setTitle] = useState(title);
    const [newUrl,setUrl] = useState(url);
    const [newContent, setContent] = useState(content);

    const formDataHandler = async (event) => {
        event.preventDefault();
        const body = {
            title: newTitle,
            url: newUrl,
            content: newContent
        }

        const res = await api.put(`/blog/${id}`,body);
        console.log(res);
        navigate(`/blog/${id}`, {state:{id:id,title:newTitle,url:newUrl,username:username,content:newContent}});

    }

    

    return (
        <div className={styles.container}>
        <form onSubmit={formDataHandler} className={styles.form}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              color='black'
              placeholder="Add title for blog"
              value={newTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="img-url">Image Url</label>
            <input
              type="text"
              color='black'
              id="img-url"
              placeholder="Add Image Url"
              value={newUrl}
              onChange={(e) => setUrl(e.target.value)}
            />

          </div>
          <div>
            <label htmlFor="Content">Content</label>
            <textarea
              id="Content"
              placeholder="Add Blog Content"
              value={newContent}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
        </div>
    )
}

export default EditBlog;