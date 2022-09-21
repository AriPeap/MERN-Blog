import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Your Account</span>
        </div>
        <form action="" className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://i1.sndcdn.com/artworks-L0K2xyKSSiCBSSvV-qxVHPw-t500x500.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="ARi" />
          <label>Email</label>
          <input type="text" placeholder="ARi@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
