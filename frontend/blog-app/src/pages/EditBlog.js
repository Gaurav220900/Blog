import React, {useRef} from "react";
import styles from '../components/AddBlog/AddBlog.module.css';
import api from "../api";
import { useLocation, useNavigate } from "react-router-dom";
const EditBlog = () => {

    const location = useLocation();
    const {id,title,url,content} = location.state;
    const navigate = useNavigate();
    const titleRef = useRef(title);
    const urlRef = useRef(url);
    const contentRef = useRef(content);

    const formDataHandler = async (event) => {
        event.preventDefault();
        const body = {
            title: titleRef.current.value,
            url: urlRef.current.value,
            content: contentRef.current.value,
        }

        const res = await api.put(`/blog/${id}`,body);
        console.log(res);
        navigate(`blog/${id}`, {
            state: {id,title,url,content}
        });

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
              value={title}
            />
          </div>
          <div>
            <label htmlFor="img-url">Image Url</label>
            <input
              type="text"
              color='black'
              id="img-url"
              placeholder="Add Image Url"
              value={url}
            />
          </div>
          <div>
            <label htmlFor="Content">Content</label>
            <textarea
              id="Content"
              placeholder="Add Blog Content"
              value={content}
            />
          </div>
          <button>Add</button>
        </form>
        </div>
    )
}

export default EditBlog;