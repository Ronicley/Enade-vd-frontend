/* eslint-disable linebreak-style */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Timeline from '@material-ui/icons/Timeline';
import Book from '@material-ui/icons/Book';
import Map from '@material-ui/icons/Map';


import { SidebarNav } from './components';

const useStyles = makeStyles(
  theme => (
    {
      drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
          marginTop: 64,
          height: 'calc(100% - 64px)'
        }
      },
      root: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(2)
      },
      divider: {
        margin: theme.spacing(2, 0)
      },
      nav: {
        marginBottom: theme.spacing(2)
      }
    }
  )
);

const Sidebar = props => {
  const {
    open,
    variant,
    onClose,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Areas',
      href: '/areas',
      icon: <DashboardIcon />
    },
    {
      title: 'Anos',
      href: '/anos',
      icon: <Timeline />
    },    
    {
      title: 'Cursos',
      href: '/cursos',
      icon: <Book />
    },
    {
      title: 'Regiões',
      href: '/regioes',
      icon: <Map />
    },    
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />

      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
