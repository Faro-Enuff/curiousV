import React, { useState } from "react";

// MUI Icons Imports
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// MUI Core Imports
import { Avatar, Input } from "@mui/material";

const Profile = () => {
  // Upload handler of an image
  const [imgLoading, setImgLoading] = useState(0);

  const fileSelectedHandler = (event) => {
    if (event.target.files) {
      handleUpload(event.target.files);
    }
    console.log(event.target.files[0]);
  };
  const handleUpload = (files) => {
    const file = files[0];
    console.log(file);
  };

  //   const dbStorageUpload = (file) => {
  //     const storageRef = storage.ref();
  //     setImgLoading(0);
  //     // Upload file
  //     const uploadTask = storageRef.child(`avatar/${file.name}`).put(file);

  //     // Listen for state changes
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         console.log(`snapshot`, snapshot);
  //         let progress = Math.round(
  //           (snapshot.bytesTransferred * 100) / snapshot.totalBytes
  //         );
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         console.log("success");
  //         setImgLoading(100);
  //         firebase
  //           .storage()
  //           .ref(`avatar/`)
  //           .child(`${file.name}`)
  //           .getDownloadURL()
  //           .then((url) => {
  //             updateUserPhoto(url);

  //             updateUserData({
  //               avatar: url,
  //               name: user?.displayName,
  //               favoriteRecipes: userData?.favoriteRecipes,
  //             });
  //           });
  //       }
  //     );
  //   };

  return (
    <div className="profile">
      <Avatar />
      <div className="upload">
        <Input
          required
          accept="image/*"
          type="file"
          id="imageUpload"
          onClick={fileSelectedHandler}
        />
        <label htmlFor="imageUpload">
          <AddAPhotoIcon fontSize="small" style={{ cursor: "pointer" }} />
        </label>
      </div>
    </div>
  );
};

export default Profile;
