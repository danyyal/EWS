import React, { useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Modal from '../../../Components/Modal/Modal';
import { updateUser } from '../../../Redux/User/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { ToastsStore } from 'react-toasts'

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const DashboardDesign = () => {
  const fileReader = new FileReader();
  const history = useHistory();
  const [hideModal, setHideModal] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const [picture, setPicture] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const { id } = currentUser;

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

  const handleUpdation = () => {
    toggleModal();
    setDisplayName(currentUser.displayName);
    setEmail(currentUser.email);
    setPicture(currentUser.picture)
  }


  return (
    <div>
      <div >
        <Grid className="sellerDesignButtonContainer" container spacing={2} >
          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" onClick={() => { history.push('/Dashboard') }} >
              Order History
            </Button>
          </Grid>

          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" onClick={() => { history.push('/CancelledOrders') }} >
              Orders Cancelled
            </Button>
          </Grid>

          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" onClick={() => handleUpdation()} >
              Manage profile
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" >
              <Link className='linkStyle' to='/ReturnOrder'>Return Orders</Link>
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
              onChange={e => setDisplayName(e.target.value)}
            />

            <div className="profilePicture">
              <label htmlFor="image">
                <h3>Profile Picture</h3>
                <div className="text-center align-middle" style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundColor: "#f7f7f7",
                  border: "1px solid #f7f7f7",
                  display: "table-cell",
                  borderRadius: "100%",
                  height: "200px",
                  width: "200px",
                  backgroundSize: "cover",
                  backgroundImage: `url( ${picture || ""})`
                }}>
                  <div style={{
                    backgroundColor: "#f7f7f7",
                    opacity: .6,
                    position: "relative",
                    top: "45%",
                    display: "inline-block",
                    padding: "8px",
                    fontSize: "13px",
                  }}>
                    {/* <Icon name="fileUpload" /> */}
                    <div style={{
                      cursor: "pointer"
                    }}>
                      Upload product image
                        </div>
                  </div>
                </div>
              </label>
              <input type="file"
                id="image"
                name="image"
                style={{ display: "none" }}
                onChange={
                  (event) => {
                    const file = event.currentTarget.files[0]
                    if (!file) return
                    fileReader.readAsDataURL(event.currentTarget.files[0])
                    fileReader.onload = function () {
                      if (file.size < 1000000) setPicture(fileReader.result)
                      else ToastsStore.error("File Size cannot be greater than 700kb")
                    };
                    fileReader.onerror = function (error) {
                      console.log('image file Error: ', error);
                    };
                  }
                }
              />
            </div>

            <TextField
              required
              fullWidth
              margin='normal'
              label="Email"
              type="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
