
import { useStyles } from './style'
import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Colors from '../../colors';
const UseStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "&>span": {
      marginBottom: "0.5rem",
      color: "white",
    },
  },
  textRoot:{
   color:"white",
   [theme.breakpoints.down('sm')]:{
    width:80
   }
  },
  MainRoot: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "12rem",
    paddingRight: "12rem",
    background: "#3C58A7",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    flexDirection: "column",
    [theme.breakpoints.down('sm')]:{
        paddingLeft:'16px'
    }
  },
  FollowUsRoot: {
    display: "flex",
    alignItems:'start',
    columnGap: 20,
    flexDirection: "column",
    color:Colors.palette.white,
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      alignItems:'start',
  }
    
  },
  socialRoot:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems:'start',
        rowGap:15
    }
  },
  Main2root:{
    display: "flex",
          justifyContent: "space-between",
          width: "100%",
          [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            alignItems:'start',
            rowGap:23
        }
  }
}));
const Footer = () => {
  const classes = UseStyle();
  return (
    <div className={classes.MainRoot}>
      <div
        className={classes.Main2root}
      >
        <div className={classes.root}>
         <h1>LOGO</h1>
        </div>
        <div className={classes.FollowUsRoot}>
          <span>Home</span>
          <span>About</span>
         
        </div>
        <div className={classes.FollowUsRoot}>
          <span>Safety & Security</span>
          <span>Help</span>
         
        </div>
        <div className={classes.FollowUsRoot}>
          <span>Terms of Services</span>
          <span>Privacy Policy</span>
          
        </div>
      
      </div>
      <div
      className={classes.socialRoot}
      >
        <div className={classes.FollowUsRoot}>
          <div style={{ display: "flex", columnGap: 10 }}>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <FacebookIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <LinkedInIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <TwitterIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <YouTubeIcon style={{ fontSize: 15 }} />
            </IconButton>
            <IconButton
              style={{
                background: "#3C58A7",
                border: "1px solid white",
                padding: 8,
                color: "white",
                fontSize: 10,
              }}
            >
              <InstagramIcon style={{ fontSize: 15 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
