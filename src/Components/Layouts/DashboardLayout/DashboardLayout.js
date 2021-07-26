import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../../../Redux/User/user.actions';

import UpperNav from '../../UpperNav/UpperNav';
import VerticalNav from '../../VerticalNav/VerticalNav';
import Footer from '../../Footer/Footer';
import './DashboardLayout.css'
import {Button} from '@material-ui/core'



const DashBoardLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };
const history =useHistory();
  return (
    <div className="sellerLayout">
    <UpperNav {...props} />
    <div className="sellercontrolPanel">
      <div className="sellersidebar">
        <VerticalNav>
          <ul>
            <li>
            <Button  className='adminButtons' onClick={()=>history.push('/')}>
            Home
          </Button>
              
            </li>
            <li>
            <Button className='adminButtons' onClick={()=>history.push('/Contact Us')}  >
           Send Feedback
          </Button>
          </li>
      <li>
      <Button className='adminButtons' onClick={()=>signOut()}>
            Sign Out
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

export default DashBoardLayout;
