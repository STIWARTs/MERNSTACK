import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  //State variable to store the comments
  let [comments, setComments] = useState([
    {
      //sample comment
      username: "@sk",
      remarks: "good job!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            
            <span>(rating = {comment.rating})</span>
            <p>- {comment.username}</p>
          </div>
        ))}
      </div>
      <hr></hr>
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
