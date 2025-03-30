import react, {useContext} from 'react';
import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';
import AuthContext from '../../store/AuthContext'
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const {isLoggedIn,logout} = useContext(AuthContext);
    return(
    <div className={styles.nav}>
         
        <div className={styles.link}>
            <Link style={{fontSize: '40px'}} to="/">BlogApp</Link>
        </div >
        <div className={styles.link}>
            {isLoggedIn && <Link className={styles.items} to="/addBlog">ADD BLOG</Link>}
            {isLoggedIn && <span>
                <FaUserCircle size={30} color="white" style={{position:'relative', top: '5px'}}/>
                <Link className={styles.items} to="/profile" title='Go to profile' style={{marginLeft: '5px', fontSize: '20px'}}>{isLoggedIn.username}</Link>
            
            </span>}
           
            {isLoggedIn &&  
            <span>
            <button className={styles.items} style={{display: 'inline',width: '100px',border: 'none', background: 'none', color: 'white', cursor: 'pointer'}} onClick={logout}>LOGOUT</button>
            </span>}
            {!isLoggedIn && <Link  className={styles.items} to ="/register">SIGNUP</Link>}
            {!isLoggedIn && <Link className={styles.items} to ="/login">LOGIN</Link>}
            
        </div>
       
    </div>
    );
};

export default Navbar;

