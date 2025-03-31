import React, {useEffect, useState,useContext} from "react";
import api from "../../api";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import { FaUserCircle } from "react-icons/fa";
const Comment = ({postId}) => {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const {isLoggedIn} = useContext(AuthContext);
  
  
    const handleSubmit = async(e) => {
    e.preventDefault();
    const commentData = {
      comment: comment,
      post: postId,
      author: isLoggedIn._id, // Assuming you have the user's ID from context or props
    };

    const res = await api.post("/comments", commentData);

    if(res.status === 201){
    console.log("Comment submitted:", comment);
    console.log(res.data);
    }

    setComment(""); // Clear the input field after submission
  };

  

  useEffect(() => { 

    const getAllPostComments = async () => {
      const res = await api.get(`/blog/${postId}/comments`);
      if(res.status === 200){
          console.log("All comments for the post:", res.data.comments);
      }
      setComments(res.data.comments);
    }
    if (postId) {  // Ensure postId is defined before making API call
      getAllPostComments();
    }

    
  }
  , [comments, postId]); // Add postId to the dependency array



    return (
    <div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          style={{
            width: "680px",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: '150px'
          }}
        >
          Submit
        </button>
      </form>
      <div>
        {comments.length === 0 && <h3>No comments yet.</h3>}
        {comments.length > 0 && <h3>Comments</h3>}
        {comments.map((comment) => (
          <div key={comment._id} style={{ margin: "10px 0", padding: "10px", borderBottom: "1px solid #ccc" }}>
            <FaUserCircle size={30} color="gray" />
            <span style={{ fontWeight: "bold", position: 'relative', top: '-10px', left: '8px' }}>{comment.author.username}<span style={{fontWeight: 'normal', float: 'right'}}>{   new Date(comment.createdAt).toLocaleString()}</span></span>
            
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
    )
};

export default Comment;