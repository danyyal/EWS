import { AppBar,Toolbar,Typography,Button, IconButton,Drawer, Link, MenuItem,} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import './Header.css';
  
  const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/About Us",
    },
    {
      label: "Products",
      href: "/Products",
    },
    {
      label: "Rental Section",
      href: "/Rental Section",
    },
    {
      label: "Contact Us",
      href: "/Contact Us",
    },
  ];
 
   const Header=()=> {  
     
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    const displayDesktop = () => {
      return (
        
         <Toolbar className='toolbar'>
          {EWSLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
        
       
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className='drawerContainer'>{getDrawerChoices()}</div>
          </Drawer>
  
          <div>{EWSLogo}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none",
                     
            },
            className:'link-style',
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const EWSLogo = (
      <Typography variant="h6" component="h1" className='logo'>
        Ecommerece with Scrapping
      </Typography>
    );
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: 'inherit',
              to: href,
              component: RouterLink,
              className: 'menu_button',
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar className='header'>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }
 
  export default Header;