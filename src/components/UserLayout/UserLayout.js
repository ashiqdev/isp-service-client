import { useContext, useState } from 'react';

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import { BookOutlined, SubjectOutlined } from '@material-ui/icons';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { store } from '../../store/store';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1rem',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  drawerPaper: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    paddingTop: '2rem',
    width: drawerWidth,
    background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
    color: '#fff',
  },

  drawer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    marginTop: '4rem',
    width: drawerWidth,
  },

  active: {
    background: purple[400],
  },
}));

const UserLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    {
      text: 'Home',
      icon: <BookOutlined />,
      path: '/',
    },

    {
      text: 'Booking List',
      icon: <SubjectOutlined />,
      path: '/bookingList',
    },

    {
      text: 'Review',
      icon: <SubjectOutlined />,
      path: '/crete-review',
    },
  ];

  const {
    state: { user },
  } = useContext(store);

  const drawerProps = {
    anchor: isSmallScreen ? 'top' : 'left',
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        {...drawerProps}
        classes={{ paper: classes.drawerPaper }}
        variant='permanent'
      >
        <List>
          {menuItems.map((item) => (
            <>
              <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon style={{ color: '#fff' }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>

      <div>
        {/* <Box m={8} /> */}
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
