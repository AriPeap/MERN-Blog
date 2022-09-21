import React from "react";
import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://cdns-images.dzcdn.net/images/artist/61bcbf8296b1669499064406c534d39d/500x500.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Clancy</b>
          </span>
          <span className="singlePostDate">
            Date: <b>1 hour ago</b>
          </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          quae mollitia voluptates? Odio, voluptatum quis possimus omnis
          exercitationem delectus adipisci sapiente sed, quae ut ex iusto sequi!
          Tempora, porro quasi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi sed placeat odio earum recusandae
          architecto corrupti, rem consectetur, alias commodi quo! Repellendus,
          at sequi aliquam cumque esse necessitatibus. Praesentium,
          dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi sed placeat odio earum recusandae architecto corrupti, rem
          consectetur, alias commodi quo! Repellendus, at sequi aliquam cumque
          esse necessitatibus. Praesentium, dolorem?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi sed placeat odio earum
          recusandae architecto corrupti, rem consectetur, alias commodi quo!
          Repellendus, at sequi aliquam cumque esse necessitatibus. Praesentium,
          dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi sed placeat odio earum recusandae architecto corrupti, rem
          consectetur, alias commodi quo! Repellendus, at sequi aliquam cumque
          esse necessitatibus. Praesentium, dolorem?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi sed placeat odio earum
          recusandae architecto corrupti, rem consectetur, alias commodi quo!
          Repellendus, at sequi aliquam cumque esse necessitatibus. Praesentium,
          dolorem?
        </p>
      </div>
    </div>
  );
}
