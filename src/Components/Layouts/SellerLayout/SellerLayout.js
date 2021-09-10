import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../../../Redux/User/user.actions';

import UpperNav from '../../UpperNav/UpperNav';
import VerticalNav from '../../VerticalNav/VerticalNav';
import Footer from '../../Footer/Footer';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal'
import './SellerLayout.css'
const SellerLayout = props => {
  const dispatch = useDispatch();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="sellerLayout">
      {showConfirmationModal && <ConfirmationModal onClick={() => signOut()} showModal={showConfirmationModal} onRequestClose={() => setShowConfirmationModal(false)} title="Sign out?" text="Are you sure you want to sign out?" />}
      <UpperNav {...props} />
      <div className="sellercontrolPanel">
        <div className="sellersidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/Seller">
                  Home
                </Link>
              </li>
              <li>
                <span className="sellersignOut" onClick={() => setShowConfirmationModal(true)}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="sellerContent">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLayout;