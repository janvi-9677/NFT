import { makeStyles } from "@material-ui/core";
import Colors from "../../colors";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    // backgroundColor: "#3393FF",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    height: "200px",
    padding: "0 40px",
    backgroundColor: Colors.palette.blue
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
