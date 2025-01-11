import react from 'react';
import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';


const Navbar = () => (
    <nav className={styles.nav}>
         
      <ul>
        <li>
          <Link to="/homepage">Blog</Link>
        </li>
        <li>
          <Link to="/addBlog">Add-Blog</Link>
        </li>
        <li>
            <Link to ="/myBlogs">My Blogs</Link>
        </li>
       </ul>
    </nav>
);

export default Navbar;

