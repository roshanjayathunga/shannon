import React, {useRef, useEffect} from 'react';
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

import { TweenMax,TimelineLite, Power3, Expo } from "gsap";

const useStyles = makeStyles({
  menuBtn: {
    float: 'right'
  },
  menuIcon: {
    fontSize: '36px !important',
    color: '#ffffff'
  },
  menuClose:{
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
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign:'center',
    backgroundColor:'#fdbd11'
  },
  listItem:{
    fontSize: '24px !important'
  }
});

export default function Navbar() {
  const classes = useStyles();
  const [menu, setState] = React.useState({
    left: false,
  });

  let app = useRef(null);
  let tl = new TimelineLite()

  useEffect(() => {
 
    TweenMax.to(".navbar", 3, {css:{visibility:'visible'}})

    // tl.from(heroImage, 3, {y: -1200, ease: Power3.easeOut},'Start')
    // .from(heroImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .5)

    // console.log(app);

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
    > 
      <List className={classes.fullList} >
         <span className={`material-icons ${classes.menuIcon} ${classes.menuClose}`}>close</span>
        {['About Us', 'Our Programmes', 'On stage and Beyond', 'Testimonials', 'Gallery', 'Contact us'].map((text, index) => (
          <React.Fragment key={text}>
            <Slide direction="right" in={checked} mountOnEnter unmountOnExit
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 * index / 4 } : {})}
            >
              <ListItem button className={classes.listItem}>
                <ListItemText primary={text}  />
              </ListItem>
            </Slide>
          </React.Fragment>
        ))}
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
      <div className="navbar" >
         <span className="logo">Sesquipedalian</span>
         <Button onClick={toggleDrawer("left", true)} className={classes.menuBtn}>
            <span className={`material-icons ${classes.menuIcon}`}>menu</span>
        </Button>
      </div>
     
    </div>
  );
}
