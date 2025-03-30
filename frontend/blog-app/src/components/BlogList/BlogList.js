import React  from 'react';
import styles from './BlogList.module.css';
import Blog from '../Blog/Blog';


const Bloglist = ({ blogs }) => {
    
    return (
        <ul className={styles.blog}> 
           {blogs && blogs.length > 0 ? (
   blogs.map((blog) => (
     <Blog
       key={blog._id}
       id={blog._id}
       title={blog.title}
       url={blog.url}
       content={blog.content}
       userId={blog.userId}
       username={blog.userId ? blog.userId.username : "Unknown User"}
     />
   ))
 ) : (
   <p>No blogs available</p> // Handle empty list case
 )}
        </ul>
    )
}

export default Bloglist;