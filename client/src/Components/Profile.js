import React, { useState, useContext, useEffect } from "react";

// Custom Hooks
import { useFetch } from "../Utils/useFetch";

// MUI Icons Imports
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// MUI Core Imports
import { Avatar, Input } from "@mui/material";

const Profile = () => {
  const [url, setUrl] = useState("http://localhost:5000/api/users/profile");

  const [formDataState, setFormDataState] = useState();
  // console.log(formDataState);
  // Get Profile Data of loggedIn User
  const { isLoading, apiData: profile, serverError } = useFetch("get", url);

  // Post Profile Picture to the API for updating

  // const { updateProfilePicture } = useContext(UserContext);

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
    setFormDataState(formData);
    // // To clg the formData
    // for (var key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    // Upload ProfilePicture
    // updateProfilePicture(formData);
  };

  // Post Fetch
  const { success } = useFetch(
    "post",
    "http://localhost:5000/api/users/uploadProfileImage",
    formDataState,
    "multipart/form-data"
  );

  return (
    <div className="profile">
      <Avatar sx={{ width: 64, height: 64 }} src={profile?.user.profileImage} />
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
