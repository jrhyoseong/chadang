import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CreateIcon from '@material-ui/icons/Create';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CarListCard from './CarListButton'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2E8CB8',
    borderRadius: '20px 20px 0 0',
    zIndex: 1000,
  },
  color: {
    color: '#fdffff'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}

    >
      <BottomNavigationAction label="홈" icon={<HomeIcon />} />
      <BottomNavigationAction label="3일보기" icon={<EventNoteIcon />} />
      <BottomNavigationAction label="글쓰기" icon={<CreateIcon />} />
      <BottomNavigationAction label="알림" icon={<NotificationsIcon f/>} />
      <BottomNavigationAction label="치량보기" icon={<CarListCard />} />
    </BottomNavigation>
  );
}
