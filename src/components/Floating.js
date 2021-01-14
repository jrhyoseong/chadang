import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: 'absolute',
      bottom: 70,
      right: 0
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab size="medium" color="#abc" aria-label="camera">
        <PhotoCameraIcon />
      </Fab>

    </div>
  );
}
