import React, { useState, FC, Dispatch, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@mui/material';
// Internal Imports
import { useFetch } from '../../Utils/useFetch';

interface Props {
  sendComment: (
    currentComment: string,
    setCurrentComment: Dispatch<string>,
    profile: any
  ) => void;
}

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      borderWidth: 6,
    },
    '& .MuiInput-underline:after': {},
    // "&:hover fieldset": {
    //   borderColor: "white",
    // },
    // "&.Mui-focused fieldset": {
    //   borderColor: "yellow",
    // },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  notchedOutline: {
    borderWidth: '2px',
    borderColor: theme.palette.primary.main,
    fontSize: 18,
  },
  root: {
    display: 'flex',
    width: '100%',
    margin: '0',
    marginBottom: '5%',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  margin: {
    width: '100%',
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
  },
}));

const CommentTextfield: FC<Props> = ({ sendComment }) => {
  const classes = useStyles();

  // Sender
  const { apiData: profile } = useFetch(
    'get',
    'http://localhost:5000/api/users/profile'
  );

  //useState for the typing in the input field
  const [currentComment, setCurrentComment] = useState<string>('');

  const handleOnChange = (event: any) => {
    setCurrentComment(event.target.value);
  };
  // console.log(currentComment);

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <CssTextField
          className={classes.margin}
          InputProps={{ classes: { notchedOutline: classes.notchedOutline } }}
          id="body"
          label="Add a comment..."
          onChange={handleOnChange}
          value={currentComment}
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <Button
          onClick={() =>
            sendComment(currentComment, setCurrentComment, profile)
          }
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default CommentTextfield;
