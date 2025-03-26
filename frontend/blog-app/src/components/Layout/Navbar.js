import react from 'react';
import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';


const Navbar = () => (
    <div className={styles.nav}>
         
        <div className={styles.link}>
            <Link style={{fontSize: '40px'}} to="/">BlogApp</Link>
        </div >
        <div className={styles.link}>
            <Link  to="/addBlog">Add-Blog</Link>
            <Link to ="/myBlogs">My Blogs</Link>
        </div>
       
    </div>
);

export default Navbar;

