import "./singlePost.css";
import SinglePost_Img from "../../img/SinglePost_Img.jpeg";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={SinglePost_Img} alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet sit amet dolor.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Hoan</b>
          </span>
          <span className="singlePostDate">
            1 hour ago
          </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet
          sit amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum
          dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet
          dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit
          amet sit amet dolor
          Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet
          sit amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum
          dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet
          dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit
          amet sit amet dolor
          Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet
          sit amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum
          dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet
          dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit
          amet sit amet dolor
          Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet
          sit amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum
          dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet
          dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit
          amet sit amet dolor
          Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet
          sit amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum
          dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet
          dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit
          amet sit amet dolor
          Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit amet
          sit amet dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum
          dolor sit amet sit amet dolor Lorem ipsum dolor sit amet sit amet
          dolor Lorem ipsum dolor sit amet sit amet dolor Lorem ipsum dolor sit
          amet sit amet dolor
          
        </p>
      </div>
    </div>
  );
}
