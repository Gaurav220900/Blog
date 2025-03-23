import {react, useState} from 'react';
import axios from 'axios';
import styles from '../components/AddBlog/AddBlog.module.css';
import {useNavigate} from 'react-router-dom';
import api from '../api';

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
            content: content
        }

        const res = await api.post('/blog',body);
        console.log(res);

        setTitle('');
        setUrl('');
        setContent('');

        navigate('/');

    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const imgUrlChangeHandler = (event) => {
        setUrl(event.target.value);
    }

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    }

return (
  <div className={styles.container}>
    <video autoPlay loop muted className={styles.backgroundVideo}>
  <source src="https://cdn.pixabay.com/video/2022/06/13/120172-720504774_tiny.mp4" type="video/mp4" />
</video>
    <form onSubmit={formDataHandler} className={styles.form}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          color='black'
          onChange={titleChangeHandler}
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
          onChange={imgUrlChangeHandler}
          placeholder="Add Image Url"
          value={url}
        />
      </div>
      <div>
        <label htmlFor="Content">Content</label>
        <textarea
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

export default AddBlog;