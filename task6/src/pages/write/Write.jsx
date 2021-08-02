import "./write.css";
import Write_Img from "../../img/SinglePost_Img.jpeg"
export default function Write() {
  return (
    <div className="write">
    <img className="writeImg" src={Write_Img}
     alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            className="writeInput"
            type="text"
            placeholder="Title"
            id="titleInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
