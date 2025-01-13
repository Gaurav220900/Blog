import React from 'react';
import styles from './BlogList.module.css';
import Blog from '../Blog/Blog';


const bloglist = ({ blogs }) => {
    return (
        <ul className='styles.blog'> 
            {blogs.map((blog) => {
                return(
                    <Blog
                    key = {blog._id}
                    id = {blog._id}
                    title = {blog.title}
                    url = {blog.url}
                    content = {blog.content}
                    />
                );
            })}
        </ul>
    )
}

export default bloglist;