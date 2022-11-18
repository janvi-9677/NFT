import { makeStyles } from "@material-ui/core";
import Colors from "../../colors";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    // backgroundColor: "#3C58A7",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    height: "auto",
    padding: "0 40px",
    backgroundColor: Colors.palette.blue
  },
  logo:{
    padding:'10px 10px',
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  rightHeader:{
    marginLeft: "auto",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: 0,
    },
  },
  mainUl:{
    display: 'flex',
    cursor: 'pointer',
    float:'left',
    listStyleType: 'none',
    color: Colors.palette.white
  },
  link:{
    marginLeft: '15%'
  },
  headerMenu:{
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  walletButton:{
    borderRadius: '50px',
    backgroundColor: 'black',
    color: 'white'
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
    gap: "0px",

    "& .MuiButton-text, .MuiSvgIcon-root": {
      color: Colors.palette.white,
      // color: "#3C58A7",
    },
  },


  mobileMenu: {
    display: "none",
  },
  "@media(max-width: 1180px)": {
    headerStyle: {
      display: "none",
    },
    
  },
  "@media(max-width: 780px)": {
    headerStyle: {
        display: "none",
      },
  },
}));

export { useStyles };
