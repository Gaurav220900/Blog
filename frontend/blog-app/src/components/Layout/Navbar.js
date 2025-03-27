import react, {useContext} from 'react';
import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';
import AuthContext from '../../store/AuthContext'

const Navbar = () => {

    const {isLoggedIn} = useContext(AuthContext);
    return(
    <div className={styles.nav}>
         
        <div className={styles.link}>
            <Link style={{fontSize: '40px'}} to="/">BlogApp</Link>
        </div >
        <div className={styles.link}>
            {isLoggedIn && <Link className={styles.items} to="/addBlog">ADD BLOG</Link>}
            {!isLoggedIn && <Link  className={styles.items}to ="/register">SIGNUP</Link>}
            {!isLoggedIn && <Link className={styles.items}to ="/login">LOGIN</Link>}
            
        </div>
       
    </div>
    );
};

export default Navbar;

