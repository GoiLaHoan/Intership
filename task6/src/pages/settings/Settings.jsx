import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import sidebar_img from "../../img/SinglePost_Img.jpeg"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={sidebar_img} alt="" />
            <label htmlFor="fileInput">
              <i className="setiingsPPicon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Hoan" />
          <label>Email</label>
          <input type="email" placeholder="nvhoan911@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
