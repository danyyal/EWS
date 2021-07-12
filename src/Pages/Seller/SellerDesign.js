import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addProductStart } from '../../Redux/Products/Products.actions';
import { Link, useHistory } from 'react-router-dom'
import { Grid, Button, TextField,Typography } from '@material-ui/core';
import CKEditor from 'ckeditor4-react';

// Componenets

import FormSelect from '../../Components/FormSelect/FormSelect';
import Modal from '../../Components/Modal/Modal';

import './SellerDesign.css';
import { categories } from './Categories';

const mapState=(state)=>({
  currentUser:state.user.currentUser
})

const SellerDesign = ({ heading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(mapState);
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('men');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [productDesc, setProductDesc] = useState('');

  const{displayName}=currentUser;

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('men');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    setStock(0);
    setProductDesc('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (productPrice > 0) {
      dispatch(
        addProductStart({
          productCategory,
          productName,
          productThumbnail,
          productPrice,
          productDesc,
          stock,
          displayName
        })
      );
      resetForm();
    }

  };

  const handleOrders = () => {
    history.push('/Seller')
  }

  return (
    <div className="seller">
 <Typography className="adminHeading" align='left' variant="h6" gutterBottom>Seller Dashbaord</Typography>

      <div className="callToActions">

        <Grid className="sellerDesignButtonContainer" container spacing={2} >
          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" onClick={() => toggleModal()}>
              Add new product
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" onClick={() => handleOrders()} >
              Recieved Orders
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button className="dashboardProductButton" >
              <Link className='linkStyle' to='/Seller/Products'> My Products</Link>
            </Button>
          </Grid>
        </Grid>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form className='productForm' onSubmit={handleSubmit}>

            <h2 className="modalHeading">
              Add new product
            </h2>

            <FormSelect
              label="Category"
              options={categories}
              onChange={e => setProductCategory(e.target.value)}
            />

            <TextField
              required
              fullWidth
              margin='normal'
              label="Product Name"
              type="text"
              value={productName}
              onChange={e => setProductName(e.target.value)}
            />


            <TextField
              required
              fullWidth
              id='pic'
              margin='normal'
              label="Upload Product Picture "
              type="url"
              value={productThumbnail}
              onChange={e => setProductThumbnail(e.target.value)}

            />

            <TextField
              fullWidth
              required
              margin='normal'
              label="Price"
              type="number"
              min="0.00"
              max="1000000.00"
              step="0.01"
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
            />

            <TextField
              fullWidth
              required
              margin='normal'
              label="quantity"
              type="number"
              min="0.00"
              max="10000.00"
              step="1"
              value={stock}
              onChange={e => setStock(e.target.value)}
            />

            <CKEditor
              required
              onChange={evt => setProductDesc(evt.editor.getData())}
            />

            <br />

            <Button className="productAddButtonModal" type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>


      <Grid container className='manageProducts' spacing={4}>
        <Grid item xs >
          {heading ? (<h1>{heading}</h1>) : (<h1>Manage Orders</h1>)}
        </Grid>
      </Grid>




    </div>
  );
}

export default SellerDesign;