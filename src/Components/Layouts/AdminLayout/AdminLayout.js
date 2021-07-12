import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../../../Redux/User/user.actions';

import UpperNav from '../../UpperNav/UpperNav';
import VerticalNav from '../../VerticalNav/VerticalNav';
import Footer from '../../Footer/Footer';
import { Button } from '@material-ui/core';
import './AdminLayout.css'


const SellerLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };
const history= useHistory();
  return (
    <div className="sellerLayout">
      <UpperNav {...props} />
      <div className="sellercontrolPanel">
        <div className="sellersidebar">
          <VerticalNav>
            <ul>
              <li>
              <Button  className='adminButtons' onClick={()=>history.push('/Admin')}>
              Home
            </Button>
                
              </li>
              <li>
              <Button className='adminButtons' onClick={()=>history.push('/Admin/manageSeller')}  >
              Manage Seller
            </Button>
            </li>
        <li>
        <Button className='adminButtons' onClick={()=>history.push('/Admin/manageBuyer')}>
              Manage Buyers
            </Button>
        </li>
            
            <li>
            <Button className='adminButtons' onClick={()=>history.push('/Admin')}>
              Manage Products
            </Button>
            
            </li>
            <li>
            <Button className='adminButtons'  onClick={()=>history.push('/Admin/ReportGenerator')}>
              Report
            </Button>
              </li>
            

              <li>
              <Button  className='adminButtons' onClick={() => signOut()}>
              SignOut
            </Button>
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