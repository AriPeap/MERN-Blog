import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdns-images.dzcdn.net/images/artist/61bcbf8296b1669499064406c534d39d/500x500.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <hr />
        <span className="postDate">1 min ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
        praesentium quod. Debitis molestiae tempore fugit aspernatur expedita,
        ad voluptates illo, eveniet corporis ipsum a nostrum, dolore odio odit
        beatae facere.
      </p>
    </div>
  );
}
