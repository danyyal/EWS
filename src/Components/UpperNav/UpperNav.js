import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../Redux/User/user.actions';
import { CheckUserIsSeller, CheckUserIsAdmin } from '../../Utils/Utils';
import { selectCartItemsCount } from '../../Redux/Cart/cart.selector';
import { selectWishItemsCount } from '../../Redux/Wishlist/wish.selector';
import HomeIcon from '@material-ui/icons/Home';
import Dropdown from '../Dropdown/Dropdown'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'

import './Uppernav.css';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalCartItems: selectCartItemsCount(state),
  totalWishItems: selectWishItemsCount(state)
});
const UpperNav = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser, totalCartItems, totalWishItems } = useSelector(mapState);
  const signOut = () => { dispatch(signOutUserStart()) };
  const isSeller = CheckUserIsSeller(currentUser);
  const isAdmin = CheckUserIsAdmin(currentUser);
  const dropdownItems = { totalCartItems, totalWishItems, currentUser, isSeller, isAdmin, signOut }
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  return (
    <>
      {showConfirmationModal && <ConfirmationModal onClick={()=>signOut()} showModal={showConfirmationModal} onRequestClose={()=>setShowConfirmationModal(false)} title="Log out?" text="Are you sure you want to log out?" />}
      <AppBar className='UpperNavBg'>
        <Dropdown className="upperDropdown" dropdownItems={dropdownItems} />
        <nav className='alignSpace'>
          <div className="alignHeading">
            <HomeIcon
              className="homeIcon"
              onClick={() => history.push('/')} />
            <Typography variant="h6" className='title'>
              <Link to='/' className='linkStyle'>Welcome to EWS</Link>
            </Typography>
          </div>

          <div className="UpperNavFlex">
            <Button><Link className='linkStyle' to='/Cart'>Cart({totalCartItems})</Link></Button>
            <Button><Link className='linkStyle' to='/Wishlist'>Wishlist({totalWishItems})</Link></Button>
            {currentUser &&
              <>
                {isSeller &&
                  <Button><Link to='/Seller' className='linkStyle'>My Seller</Link></Button>
                }

                {isAdmin &&
                  <Button><Link to='/Admin' className='linkStyle'>Admin Dashborad</Link></Button>
                }

                <Button ><Link to='/Dashboard' className='linkStyle'>My Account</Link></Button>
                <Button onClick={() => setShowConfirmationModal(true)} className='log'><Link to='/' className='linkStyle'>LogOut</Link></Button>
              </>
            }
            {!currentUser && (
              <div className="sider">
                <Button><Link to='/SignIn' className='linkStyle'>SignIn</Link></Button>
                <Button ><Link to='/SignUp' className='linkStyle'>SignUp</Link></Button>
              </div>
            )}
          </div>
        </nav>
      </AppBar>
    </>
  );
}

UpperNav.defaultProps = {
  currentUser: null
}
export default UpperNav;