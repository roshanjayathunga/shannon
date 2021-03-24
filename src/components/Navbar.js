import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import { Location } from '@reach/router';

import logo from '../img/logo.png'

import { TweenMax, TimelineLite, Power3, Expo } from "gsap";
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    paddingTop: '4px',
    paddingBottom: '4px'
  },
  menuBtn: {
    float: 'right',
    backgroundColor: 'transparent',
    border: 'none',
    margin: '10px'
  },
  menuIcon: {
    fontSize: '36px !important',
    color: '#fdbd11',
  },
  menuClose: {
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '10px',
    cursor: 'pointer',
    color: '#131313'
  },
  fullList: {
    width: 'auto',
    minWidth: '300px',
    width: '30vW',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fdbd11'
  },
  listItem: {
    fontSize: '18px !important',
    paddingTop: '4px !important',
    paddingBottom: '4px !important',
  },
  listItemSub: {
    fontSize: '14px !important',
  }
});

export default function Navbar() {
  const classes = useStyles();
  const [menu, setState] = React.useState({
    left: false,
  });

  const [colorChange, setColorchange] = React.useState(false);
  if (typeof window !== "undefined") {
    const scroller = window;
    const changeNavbarColor = () => {
        if (scroller.scrollY >= 80) {
          setColorchange(true);
        }
        else {
          setColorchange(false);
        }
    };
    scroller.addEventListener('scroll', changeNavbarColor);
  }


  let app = useRef(null);
  let tl = new TimelineLite();

  let navMenu = [{ title: 'Home', path: '/' }, { title: 'About Us', path: '/about' }, { title: 'Curriculum', path: '/program' }, { title: 'On stage and Beyond', path: '/onstagebeyond' }, { title: 'Gallery', path: '/gallery' }, { title: 'FAQ', path: '/faq' }, { title: 'Contact Us', path: '/contact' }]
  let navMenuSub = []
  let path = '';

  if (typeof window !== "undefined") {
    path = window.location.pathname;

    if (path == '/program') {
      navMenuSub = [{ title: 'Launch To Ascent', path: '#launchToAscent' }, { title: 'Launch', path: '#launch' }, { title: 'Propel', path: '#propel' }, { title: 'Ascend', path: '#ascend' }]
    }

    if (path == '/about') {
      navMenuSub = [{ title: 'Aboutss', path: '/program#launch' }, { title: 'Ignite', path: '/#ignite' }, { title: 'Propel', path: '/#propel' }, { title: 'Ascend', path: '/#ascend' }]
    }
  }

  useEffect(() => {
    TweenMax.to(".navbar", 3, { css: { visibility: 'visible' } })

    // tl.from(heroImage, 3, {y: -1200, ease: Power3.easeOut},'Start')
    // .from(heroImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .5)
  });

  const [checked, setChecked] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...menu, [anchor]: open });
    setChecked((prev) => !prev);
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="navbar-collapse"
    >
      <List className={classes.fullList} >
        <i className={`fas fa-times ${classes.menuIcon} ${classes.menuClose}`}></i>

        {navMenu.map((item, index) => (
          <React.Fragment key={item.title}>
            <Slide direction="right" in={checked} mountOnEnter unmountOnExit
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 * index / 4 } : {})}
            ><Link to={item.path}>
                <ListItem button className={classes.listItem}>
                  <ListItemText primary={item.title} />
                </ListItem>
                <div>
                  {item.path == path ? (
                    navMenuSub.map((subItem, subIndex) => {
                      return (
                        <Link to={item.path + subItem.path}>
                          <ListItem button className="nav-item-sub">
                            <ListItemText className="nav-item-sub-text" primary={subItem.title} />
                          </ListItem>
                        </Link>
                      )
                    })
                  ) : (null)}
                </div>
              </Link>

            </Slide>
          </React.Fragment>
        ))}

        <Slide direction="right" in={checked} mountOnEnter unmountOnExit
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})}
        >
          <ListItem className="flex justify-center">
            <button variant="contained" color="primary" className="btn btn-accent">
              Join Now
          </button>
          </ListItem>
        </Slide>


        <Slide direction="right" in={checked} mountOnEnter unmountOnExit
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2300 } : {})}
        >
          <ListItem className="navbar-social-wrap">
            <Link to="https://facebook.com">
              <span className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </span>
            </Link>
            <Link to="https://instagram.com">
              <span className="social-icon">
                <i className="fab fa-instagram"></i>
              </span>
            </Link>
            <Link to="https://twitter.com">
              <span className="social-icon">
                <i class="fab fa-twitter"></i>
              </span>
            </Link>
          </ListItem>
        </Slide>
      </List>
    </div>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={menu[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <div className={colorChange ? 'navbar nav-color-change' : 'navbar'} >
        <Link to="/"><span className="logo"><img src={logo} /></span></Link>
        <button onClick={toggleDrawer("left", true)} className={classes.menuBtn}>
          <i className={`fas fa-bars ${classes.menuIcon}`}></i>
        </button>
      </div>
    </div>
  );
}
