import React from 'react';
import { useStyles } from './style';
import {Box,InputAdornment,IconButton} from "@material-ui/core";
import logo from '../../assets/logo.jpeg';
import { MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Colors from '../../colors';

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Box className={classes.headerStyle}>
        <img src={logo} width={70} className={classes.logo}/>
        <Box className={classes.rightHeader}>
       <div>
       <ul  className={classes.mainUl}>
      <li>
        Home
      </li>
      <li>
        Home
      </li>
      <li>
        Home
      </li>
      <li>
        Home
      </li>
      
     </ul>
       </div>
      </Box>

      </Box> */}
 

 
      <Box className={classes.headerStyle}>
        <img
          src={logo}
          width={70}
          className={classes.logo}
        />
        <Box className={classes.headerMenu}>
         <ul className={classes.mainUl}>
          <li className={classes.link}>
            Home
          </li>
          <li className={classes.link}>
            Contact
          </li>
          <li className={classes.link}>
            About
          </li>
          <li className={classes.link}>
            Market
          </li>
         </ul>
        </Box>
        <Box className={classes.rightHeader}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search Jobs"
            variant="outlined"
            size="small"
            style={{ background: "white", borderRadius: 5, width: 500 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
             
            }}
          />
         <Button
          style=
          {{backgroundColor: Colors.palette.black,
          color: Colors.palette.white ,
          borderRadius:'50px',
          textTransform: 'initial'
          }}
          >
          Connect Wallet
          </Button>
         <Box className={classes.socialIcons}>
      
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          
            <IconButton>
              <PersonOutlineIcon />
            </IconButton>
            <IconButton>
              <AccountBalanceWalletIcon/>
            </IconButton>
          </Box>
        </Box>
      </Box>


    
    </div>
  )
}

export default Header