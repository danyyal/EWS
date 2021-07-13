import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import CKEditor from 'ckeditor4-react';

// @material ui core
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// product actions
import { addProductStart } from '../../../Redux/Products/Products.actions';

// components
import Modal from '../../../Components/Modal/Modal';
import { categories } from '../../Seller/Categories';
import FormSelect from '../../../Components/FormSelect/FormSelect';
import './AdminDesign.css';



const mapState = (state) => ({
  currentUser: state.user.currentUser
})

const AdminDesign = ({ heading }) => {
  const { currentUser } = useSelector(mapState);
  const [hideModal, setHideModal] = useState(true);
  const [categoryModal, setCategoryModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [productCategory, setProductCategory] = useState('men');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [productDesc, setProductDesc] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { displayName } = currentUser;

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

  const handleSubmitProduct = e => {
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

  const handleSubmitCategory = e => {
    console.log("handle add category needs to be completed yet")
    // e.preventDefault();

    // if (productPrice > 0) {
    //   dispatch(
    //     addProductStart({
    //       productCategory,
    //       productName,
    //       productThumbnail,
    //       productPrice,
    //       productDesc,
    //       stock,
    //       displayName
    //     })
    //   );
    //   resetForm();
    // }

  };

  return (
    <div className="seller">
      <Typography className="adminHeading" align='left' variant="h6" gutterBottom>
        Admin Pannel
      </Typography>
      <div className="callToActions">

        <Grid className="sellerDesignButtonContainer" container spacing={3} >
          <Grid item md={4} >
            <Button className="adminDashboardButton" onClick={() => {
              setCategoryModal(true)
              setProductModal(false)
              toggleModal()}}>
              <AddIcon /> Add Category
            </Button>
          </Grid>
          <Grid item md={4}  >
            <Button className="adminDashboardButton" >
              <AddIcon />Add User
            </Button>
          </Grid>
          <Grid item md={4}  >
            <Button className="adminDashboardButton" onClick={() => {
              setCategoryModal(false)
              setProductModal(true)
              toggleModal()}}>
              <AddIcon />Add Product
            </Button>
          </Grid>
        </Grid>

        <Grid container align='center ' className='manageProducts' spacing={4}>
          <Grid item xs >
            {(() => {
              switch (heading) {
                case 'Manage Seller':
                  return (
                    <h1>{heading}</h1>
                  )
                case 'Manage Buyer':
                  return (
                    <h1>{heading}</h1>
                  )
                case 'Generate Report':
                  return (
                    <h1>{heading}</h1>
                  )

                default:
                  return (
                    <h1>Manage Products</h1>
                  )
              }
            })()}
          </Grid>
        </Grid>
      </div>


      { productModal && <Modal {...configModal}>
        <div className="addNewProductForm">
          <form className='productForm' onSubmit={handleSubmitProduct}>

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
      </Modal> }

      { categoryModal && <Modal {...configModal}>
        <div className="addNewProductForm">
          <form className='productForm' onSubmit={handleSubmitCategory}>
            <h2 className="modalHeading">
              Add new Category
            </h2>
            <TextField
              required
              fullWidth
              margin='normal'
              label="Category Name"
              type="text"
            />
            <TextField
              required
              fullWidth
              id='pic'
              margin='normal'
              label=" Category value "
              type="text"

            />
            <Button className="productAddButtonModal" type="submit">
              Add Category
            </Button>
          </form>
        </div>
      </Modal> }


    </div>
  );
}

export default AdminDesign;