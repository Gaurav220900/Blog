import React, {useState} from "react";


const Comment = () => {

    const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
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