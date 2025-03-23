import react, { useState } from 'react';
import styles from './AddBlog.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBlogForm = () => {

    const AddBlog = () => {

        const [title,setTitle] = useState('');
        const [url,setUrl] = useState('');
        const [content,setContent] = useState('');
        const navigate = useNavigate();

        async function formDataHandler(event) {
            event.preventDefault();
            const body = {
                title: title,
                url: url,
                content: content,
            };
            console.log(body);

            const res = await axios.post('http://localhost:4000/blog',body);
            console.log(res);

            setTitle('');
            setUrl('');
            setContent('');

            navigate("/homepage");

        };

        const titleChangeHandler = (event) => {
            setTitle(event.target.value);
        };

        const imgUrlChangeHandler = (event) => {
            setTitle(event.target.value);
        };

        const contentChangeHandler = (event) => {
            setTitle(event.target.value);
        };

    return (
      <div className={styles.container}>
        <form onSubmit={formDataHandler} className={styles.form}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={titleChangeHandler}
              placeholder="Add title for blog"
              value={title}
            />
          </div>
          <div>
            <label htmlFor="img-url">Image Url</label>
            <input
              type="text"
              id="img-url"
              onChange={imgUrlChangeHandler}
              placeholder="Add Image Url"
              value={url}
            />
          </div>
          <div>
            <label htmlFor="Content">Content</label>
            <input
              type="textarea"
              row = '4'
              id="Content"
              onChange={contentChangeHandler}
              placeholder="Add Blog Content"
              value={content}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    )
}
} 

export default AddBlogForm;