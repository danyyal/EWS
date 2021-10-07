import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOutUserStart, signUpUserStart } from '../../../Redux/User/user.actions';
import {setPriceRanges} from '../../../Redux/PriceRanges/PriceRanges.actions'
import { Grid, Typography, Button, TextField, Checkbox } from '@material-ui/core';
import AuthWrapper from '../../AuthWrapper/AuthWrapper'
import AddUserModal from './AddUserModal'
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal'
import './AdminLayout.css'
import * as fs from 'fs';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
  MailError: user.MailError
})
const AdminLinks = ({displayer="none"}) => {
  const [hideModal, setHideModal] = useState(true);
  const [addUser, setaddUser] = useState(false);
  const dispatch = useDispatch();
  const { userErr, MailError } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmPassword] = useState('');
  const [errors, setError] = useState([]);
  const [mailError, setMailError] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const toggleModal = () => setHideModal(!hideModal);

  useEffect(() => {
    if (Array.isArray([userErr]) && userErr.length > 0) {
      setError(userErr);
    }
  }, [userErr]);

  useEffect(() => {
    if (MailError !== undefined) {
      setMailError(MailError);
    }

  }, [MailError]);
  const configAuthWrapper = {
    headline: 'Sign Up',
  };

  const configModal = {
    hideModal,
    toggleModal
  };

  const ResetForm = () => {
    setDisplayName('');
    setError([]);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    document.getElementById("sellerCheck").checked=false;
  }

  function getCategory(value) {
    switch (value) {
      case 'Automobiles & Motorcycles':
        return "automobilesandmotorcycle"
  
      case 'Luggage & Bags':
        return "bags"

      case 'Computer & Office':
        return "computerandofficeappliances"
  
      case 'Beauty & Health':
        return "healthandbeauty"
  
      case 'Home & Garden':
        return "homeandgarden"
  
      case 'Home Improvement':
        return "homeimprovements"
  
      case 'Pet Products':
        return "petproducts"
  
      case 'Mother & Kids':
        return "motherandchildcare"
  
      case "Men's Clothing":
        return "menscloth"
  
      case 'Mobile Phone Cables':
        return "phonecables"
  
      case 'Cellphones':
        return "phones"
  
      case 'Mobile Phone Accessories':
        return "phonesaccessories"
  
      case 'Security & Protection':
        return "securityproducts"
  
      case 'Refurbished Phones':
        return "refurbishedphones"
  
      case 'Cellphones & Telecommunications':
        return "phonesandcommunicationdevices"
  
      case 'Shoes':
        return "shoes"
  
      case 'Sports & Entertainment':
        return "sportsandentertainment"
  
      case 'Tools':
        return "tools"
  
      case 'Toys & Hobbies':
        return "toys"
  
      case 'Watches':
        return "watches"
  
      case "Women's Clothing":
        return "womencloth"
  
      case 'Jewelry & Accessories':
        return "womenjewellery"
  
      default:
        return "others"
    }
  
  }
  function getRanges(pricesArray){
    let ranges = [];
    let prices = [];
    let min;
    let max;
    let sum = 0;
    pricesArray.map(category => {
      prices = category.categoryPrice;
      min = Math.min(...prices);
      if(min<100) min=100;
      max = Math.max(...prices);
      prices.map(price =>{
        sum += price;
      })
      sum = sum/prices.length
    
    let categoryRange ={ 'min':min, 'max':max, 'average' : sum}
    ranges.push({categoryName : category.categoryName, categoryRange : categoryRange })
  })
   return ranges;
  }
  // function readTextFile() {
  //   let json = require('./AllData.json')
  //   let a = 0;
  //   let price = [];
  //   let structuredPrices = [];
  //   let categoryName= '';
  //   json.map(category => {
  //     price = [];
  //     a = 0;
  //     category.map(page => {
  //       categoryName = getCategory(page.breadCrumb.keywords)
  //       if(categoryName === 'refurbishedphones' || categoryName === 'automobilesandmotorcycle' || categoryName === 'phones'){
  //         page.mods.itemList.content.map((item) => {
  //           price[a] = item?.prices?.salePrice?.minPrice * 170;
  //           a++;
  //         })
  //       } else{
  //         page.mods.itemList.content.map((item) => {
  //           if(item?.prices?.salePrice?.minPrice * 170 < 100000)
  //             price[a] = item?.prices?.salePrice?.minPrice * 170;
  //           else 
  //             price[a]= 100000;
  //           a++;
  //         })
  //       }
  //     })
  //     structuredPrices.push( { categoryName : categoryName, categoryPrice : price } ) ;
  //   })
  //  const ranges = getRanges(structuredPrices);

  //  dispatch(setPriceRanges(ranges));
  // }

  const handleFormSubmit = event => {

    event.preventDefault();
    if (document.getElementById("sellerCheck").checked) {
      dispatch(signUpUserStart({
        displayName,
        email,
        password,
        errors,
        confirmationPassword,
        userRoles: ['user', 'seller']
      }));
    }
    else {
      dispatch(signUpUserStart({
        displayName,
        email,
        password,
        errors,
        confirmationPassword,
        userRoles: ['user']

      }));
    }
  }

  const signOut = () => {
    dispatch(signOutUserStart());
  };
  const history = useHistory();
  return (
    <ul className={displayer}>
      {showConfirmationModal && <ConfirmationModal onClick={()=>signOut()} showModal={showConfirmationModal} onRequestClose={()=>setShowConfirmationModal(false)} title="Sign out?" text="Are you sure you want to sign out?" />}
      <li >
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin')}>
          Home
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => {
              setaddUser(true)
              toggleModal()
            }} >
          Add User
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

      {/* <li>
        <Button className='adminButtons liBorder' onClick={() => readTextFile()
          }>
          Get Prices
        </Button>
      </li> */}

       <li>
        <Button className='adminButtons liBorder'  onClick={() => history.push('/Admin/Queries')}>
          Queries
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => setShowConfirmationModal(true)}>
          SignOut
        </Button>
      </li>

      { addUser && <AddUserModal {...configModal}>
        <AuthWrapper {...configAuthWrapper}>
          <Typography>
            {errors.length > 0 && (
              <ul className='ErrorStyle'>
                {[errors].map((err, index) => {
                  return (
                    <li key={index}>
                      {err}
                    </li>
                  )
                })}
              </ul>
            )}


            {mailError.length > 0 && (
              <span className='MailStyle'>{mailError}</span>
            )}

          </Typography>
          <form onSubmit={handleFormSubmit} autoComplete='off'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="displayName"
                  name='displayName'
                  value={displayName}
                  label="Full Name"
                  onChange={e => setDisplayName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='email'
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name='email'
                  value={email}
                  label="Email Address"
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  name='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  name='confirmPassword'
                  value={confirmationPassword}
                  onChange={e => {
                    if(e.target.value === password)
                      setMailError("")
                    setConfirmPassword(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Checkbox id="sellerCheck" /> Please check if you want to create user as a Seller
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Button className="resetForm" onClick={()=>ResetForm()} >Reset Form</Button>
                </Typography>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className='SignInButton'
            >
              Add User
            </Button>
          </form>
        </AuthWrapper>
      </AddUserModal>}

    </ul>
  )
}

export default AdminLinks;