import React, { FC, useState, useEffect, useContext } from 'react';
// MUI Imports
import { Button, Input } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import { useFetch } from '../Utils/useFetch';
import { AuthContext } from '../Context/authContext';
import Loader from '../Utils/Loader';
import Enso from '../Images/EnsoTransparent.png';

interface Props {}

const useStyles = makeStyles({
  editProfileWindow: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileImageDiv: {
    position: 'absolute',
    top: '25%',
    bottom: '25%',
    width: '90%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRow: {
    display: 'flex',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  profileImage: {
    maxWidth: '100%',
    borderRadius: '45%',
    width: 'auto',
    height: '500px',
  },
  frameImageDiv: {
    position: 'absolute',
    top: '15%',
    bottom: '25%',
    maxWidth: '100%',
    height: 'auto',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameImage: {
    transform: 'rotate(180deg)',
    width: 'auto',
    height: '500px',
    zIndex: -1,
  },
});

const EditProfile: FC<Props> = () => {
  const classes = useStyles();

  const { isLoading: profileLoading, apiData: profile } = useFetch(
    'get',
    'http://localhost:5000/api/users/profile'
  );

  const { updateProfileImage } = useContext(AuthContext);

  const [user, setUser] = useState<any>();

  useEffect(() => {
    setUser(profile?.user);
  }, [profile]);

  const clickHandlerUpload = (event: any) => {
    if (event.target.files) {
      handleUpload(event.target.files);
    }
    console.log(event.target.files[0]);
  };

  const handleUpload = (files: File[]) => {
    // get Image
    const profileImage: File = files[0];
    console.log(profileImage);

    // setUser
    setUser({ ...user, profileImage: profileImage });

    // transform to form data
    const formData: FormData = new FormData();
    formData.append('profileImage', profileImage);
    // use back-end update route
    updateProfileImage(formData, setUser);
  };

  console.log('User : >>', user);

  return (
    <div className={classes.editProfileWindow}>
      {profileLoading && <Loader />}
      <div className={classes.profileImageDiv}>
        <img
          src={user?.profileImage ? user.profileImage : Enso}
          alt="profileImage"
          className={classes.profileImage}
        />
        <div className={classes.btnRow}>
          <form method="post" encType="multipart/form-data">
            <Input
              required
              type="file"
              id="imageUpload"
              name="learningFile"
              onChange={clickHandlerUpload}
            />
            <label htmlFor="imageUpload">
              <Button
                variant="outlined"
                size="large"
                component="span"
                color="primary"
              >
                Upload
              </Button>
            </label>
          </form>
        </div>
      </div>
      <div className={classes.frameImageDiv}>
        <img src={Enso} alt="Frame Image" className={classes.frameImage} />
      </div>
    </div>
  );
};

export default EditProfile;
