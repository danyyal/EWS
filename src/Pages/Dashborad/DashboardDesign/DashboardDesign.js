import React ,{useState}from 'react';
import { Grid, Button,TextField } from '@material-ui/core';
import {Link,useHistory} from 'react-router-dom';
import Modal from '../../../Components/Modal/Modal';
import { updateUser } from '../../../Redux/User/user.actions';
import { useDispatch,useSelector } from 'react-redux';


const mapState =({user})=>({
  currentUser:user.currentUser
})

const DashboardDesign = () => {
const history = useHistory();
const [hideModal, setHideModal] = useState(true);
const [displayName, setdisplayName] = useState('');
const [picture, setpicture] = useState('');
const [email, setemail] = useState('');
const dispatch = useDispatch();
const {currentUser} = useSelector(mapState);
const{id} = currentUser;

const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };



const resetForm = () => {
    setHideModal(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateUser({
      displayName,
      email,
      picture,
       id,
    }))
      resetForm();
    }

  const handleUpdation =()=>{
    toggleModal();
  setdisplayName(currentUser.displayName);
  setemail(currentUser.email);
  }


  return (
    <div>
      {/* <h1 className="historyHeading">Order History</h1> */}
      <div className="callToActions">

        <Grid className="sellerDesignButtonContainer" container spacing={2} >
          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" onClick={()=>{history.push('/Dashboard')}} >
              Order History
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton"  onClick={() => handleUpdation()} >
              Manage profile
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" >
              <Link className='linkStyle'to='/ReturnOrder'>Return Orders</Link>
            </Button>
          </Grid>
        </Grid>
      </div>


      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form className='productForm' onSubmit={handleSubmit}>

            <h2 className="modalHeading">
              Edit Personal Details 
            </h2>


            <TextField
              required
              fullWidth
              margin='normal'
              label="Name"
              type="text"
              value={displayName}
              onChange={e => setdisplayName(e.target.value)}
            />
            


            <TextField
            
              fullWidth
              id='pic'
              margin='normal'
              label="Upload  Picture "
              type="url"
              value={picture}
              onChange={e => setpicture(e.target.value)}

            />

          <TextField
              required
              fullWidth
              margin='normal'
              label="Email"
              type="Email"
              value={email}
              onChange={e => setemail(e.target.value)}
            />


            <Button className="productAddButtonModal" type="submit">
              Update
            </Button>

          </form>
        </div>
      </Modal>

      </div>
    
  )
}

export default DashboardDesign;
