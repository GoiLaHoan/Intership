import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  let user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          
          <li className="topListItem" onClick={() => {
            user = false;
            console.log(user);
            }}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://yt3.ggpht.com/yti/APfAmoEeZnFDYn0bsSD6Hbv1Piqqz9K6XAMLTKevfiAA=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
        ) : (
          <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
