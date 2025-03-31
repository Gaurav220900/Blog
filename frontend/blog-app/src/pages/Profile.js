import { useContext, useEffect } from "react";
import React from "react";
import AuthContext from "../store/AuthContext";
import api from '../api';
import Bloglist from "../components/BlogList/BlogList";

const Profile = () => {
    const {isLoggedIn} = useContext(AuthContext);
    const [blogs, setBlogs] = React.useState([]);

    useEffect(() => {
    const getAllBlogs = async () => {
        const res = await api.get(`/blogs/${isLoggedIn._id}`);
        if(res.status === 200){
            console.log("All blogs for the user:", res.data.blogs);
        }
        setBlogs(res.data.blogs);
    }

    getAllBlogs();
    }
    , [isLoggedIn._id, blogs]); // Add isLoggedIn._id to the dependency array
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
                <h3>Your username: {isLoggedIn.username}</h3>
                <p>Your Email: {isLoggedIn.email}</p>
            </div>
            <h2 style={{marginLeft: '110px'}}>All blogs</h2>
            <Bloglist blogs={blogs} />
        </div>
    );
}
export default Profile;