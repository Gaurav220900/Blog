import React, {Fragment, useEffect, useState} from "react";
import BlogList from '../components/BlogList/BlogList';
import api from '../api';

const Homepage = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        const getBlogList = async() => {
            try{
                const res = await api.get("/blogs");
                //const data = await res.json();
                console.log(res);
                setBlogs(res.data.blogs);
            }catch(err){
                console.error(err);
            }
        }

        getBlogList();
    }, []);

    return(
        <Fragment>
            <BlogList blogs={blogs} />
        </Fragment>
    )
}

export default Homepage;