import "./header.css";
import header_Img from "../../img/header_Img.jpeg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={header_Img} alt="" />
    </div>
  );
};

