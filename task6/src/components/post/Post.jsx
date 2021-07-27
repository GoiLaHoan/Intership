import "./post.css";
import post_img from "../../img/post.jpg";
import { Link } from "react-router-dom";
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={post_img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <Link className="link" to ="/post/1"><span className="postTitle">lorem ipsum dolor sit amet</span></Link>
        
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit
        amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor
        sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet dolor?
        Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit
        amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor
        sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet dolor?
        Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit
        amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor
        sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet dolor?
      </p>
    </div>
  );
};


