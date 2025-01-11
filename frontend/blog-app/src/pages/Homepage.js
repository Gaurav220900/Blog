import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import BlogList from '../components/BlogList/BlogList';

const Homepage = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        async function getBlogList() {
            try{
                const res = await axios.get('http://localhost:3000/blogs');
                if(res.status !== 200)
                    throw new Error('Something went wrong');
                setBlogs(() => res.data);
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