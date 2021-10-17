import React, { useState, useContext, useEffect } from "react";

// Context Imports
import { UserContext } from "../Context/userContext";

// MUI Icons Imports
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// MUI Core Imports
import { Avatar, Input } from "@mui/material";
import { AuthContext } from "../Context/authContext";

const Profile = () => {
  const { profile, updateProfilePicture } = useContext(UserContext);

  const fileSelectedHandler = (event) => {
    if (event.target.files) {
      handleUpload(event.target.files);
    }
  };

  const handleUpload = (files) => {
    const file = files[0];
    console.log(file);

    const formData = new FormData();
    formData.append("profileImage", file);

    // To clg the formData
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    // Upload ProfilePicture
    updateProfilePicture(formData);
  };

  return (
    <div className="profile">
      <Avatar sx={{ width: 64, height: 64 }} src={profile?.profileImage} />
      <div className="upload">
        <form method="post" encType="multipart/form-data">
          <Input
            required
            accept="image/*"
            type="file"
            name="profileImage"
            id="imageUpload"
            onChange={fileSelectedHandler}
          />
          <label htmlFor="imageUpload">
            <AddAPhotoIcon fontSize="small" style={{ cursor: "pointer" }} />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Profile;
