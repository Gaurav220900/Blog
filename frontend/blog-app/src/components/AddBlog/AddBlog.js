import react, { useState } from 'react';
import styles from './Blog.module.css';
import axios from 'axios';

const AddBlogForm = () => {

    const AddBlog = () => {

        const [title,setTitle] = useState('');
        const [url,setUrl] = useState('');
        const [content,setContent] = useState('');

        async function formDataHandler(event) {
            event.preventDefault();
            const body = {
                title: title,
                url: url,
                content: content
            }

            const res = await axios.post('http://localhost:3000/blog',body);
            console.log(res);

            setTitle('');
            setUrl('');
            setContent('');

        }

        const titleChangeHandler = (event) => {
            setTitle(event.target.value);
        }

        const imgUrlChangeHandler = (event) => {
            setTitle(event.target.value);
        }

        const contentChangeHandler = (event) => {
            setTitle(event.target.value);
        }

    return (
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
              row = '5'
              id="Content"
              onChange={contentChangeHandler}
              placeholder="Add Blog Content"
              value={content}
            />
          </div>
          <button>Add</button>
        </form>
    )
}
} 

export default AddBlogForm;