import React, { useState, useContext, useEffect } from "react";

// Custom Hooks
import { useFetch } from "../Utils/useFetch";

// Context Imports
import { UserContext } from "../Context/userContext";

// MUI Icons Imports
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// MUI Core Imports
import { Avatar, Input } from "@mui/material";
import { AuthContext } from "../Context/authContext";

const Profile = () => {
  // Get Profile Data of loggedIn User
  const {
    isLoading,
    apiData: profile,
    serverError,
  } = useFetch("get", "http://localhost:5000/api/users/profile");

  // Post Profile Picture to the API for updating

  const { updateProfilePicture } = useContext(UserContext);

  const fileSelectedHandler = (event) => {
    if (event.target.files) {
      handleUpload(event.target.files);
    }
  };

  // console.log(`profile : >>`, profile);

  const handleUpload = (files) => {
    const file = files[0];
    console.log(file);

    const formData = new FormData();
    formData.append("profileImage", file);

    // // To clg the formData
    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    // Upload ProfilePicture
    updateProfilePicture(formData);
  };

  return (
    <div className="profile">
      <Avatar
        sx={{ width: 64, height: 64 }}
        src={profile?.user?.profileImage}
      />
      <div className="upload">
        <form method="post" encType="multipart/form-data">
          <Input
            required
            style={{ display: "none" }}
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
