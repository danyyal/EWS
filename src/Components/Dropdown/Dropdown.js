import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Favorite from '@material-ui/icons/Favorite';
import MyAccount from '@material-ui/icons/Accessibility';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Login from '@material-ui/icons/VpnKey';
import SignUp from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

import './DropDown.css'


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Dropdown({ dropdownItems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="upperDropDown">
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon fontSize="small"/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropdownItems.currentUser &&
          <>
            <StyledMenuItem>
              <ListItemIcon>
                <ShoppingCart fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={() => history.push('/Cart')} primary={`Cart(${dropdownItems.totalCartItems})`} />
            </StyledMenuItem>

            <StyledMenuItem>
              <ListItemIcon>
                <Favorite fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={() => history.push('/Wishlist')} primary={`Wishlist(${dropdownItems.totalWishItems})`} />
            </StyledMenuItem>

            {dropdownItems.isSeller &&
              <StyledMenuItem>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText onClick={() => history.push('/Seller')} primary="My Seller" />
              </StyledMenuItem>}

            {dropdownItems.isAdmin && <StyledMenuItem>
              <ListItemIcon>
                <SupervisorAccountIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={() => history.push('/Admin')} primary="Admin Dashboard" />
            </StyledMenuItem>}

            <StyledMenuItem>
              <ListItemIcon>
                <MyAccount fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={() => history.push('/Dashboard')} primary="My Account" />
            </StyledMenuItem>

            <StyledMenuItem>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={() => dropdownItems.signOut()} primary="logout" />
            </StyledMenuItem>
          </>}
        {!dropdownItems.currentUser &&
          <>
            <StyledMenuItem>
              <ListItemIcon>
                <Login fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={() => history.push('/SignIn')} primary="Sign In" />
            </StyledMenuItem>

            <StyledMenuItem>
              <ListItemIcon>
                <SignUp fontSize="small" />
              </ListItemIcon>
              <ListItemText onClick={() => history.push('/SignUp')} primary="Sign Up" />
            </StyledMenuItem>
          </>}
      </StyledMenu>
    </div>
  );
}
