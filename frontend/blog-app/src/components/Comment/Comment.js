import React, {useState} from "react";
import api from "../../api";
import axios from "axios";
const Comment = () => {

    const [comment, setComment] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const commentData = {
      comment: comment,
    };
    //const res = await api.post("/comments", commentData);
    const res = await axios.post('http://127.0.0.1:4000/comments',commentData);
    if(res.status === 201){
    console.log("Comment submitted:", comment);
    console.log(res.data);
    }
    setComment(""); // Clear the input field after submission
  };



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
    </div>
    )
};

export default Comment;