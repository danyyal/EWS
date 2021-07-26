import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../../../Redux/User/user.actions';
import { Button } from '@material-ui/core';
import './AdminLayout.css'

const AdminLinks = ({displayer="none"}) => {

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };
  const history = useHistory();
  return (
    <ul className={displayer}>
      <li >
        <Button className='adminButtons liBorder' onClick={() => history.push('/')}>
          Home
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin/manageSeller')}  >
          Manage Seller
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin/manageBuyer')}>
          Manage Buyers
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin')}>
          Manage Products
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin/ReportGenerator')}>
          Report
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => signOut()}>
          SignOut
        </Button>
      </li>



    </ul>
  )
}

export default AdminLinks;