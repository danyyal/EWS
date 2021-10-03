import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addProductStart } from '../../Redux/Products/Products.actions';
import { Link, useHistory } from 'react-router-dom'
import { Grid, Button, TextField,Typography } from '@material-ui/core';
import { getPriceRanges } from '../../Redux/PriceRanges/PriceRanges.actions'
import CKEditor from 'ckeditor4-react';
import { ToastsStore } from 'react-toasts'
// Componenets

import FormSelect from '../../Components/FormSelect/FormSelect';
import Modal from '../../Components/Modal/Modal';

import './SellerDesign.css';
import { categories } from './Categories';
const getCategoryRanges = (data, category)=>{
  if(category ==='others') return {categoryName : 'others', categoryRange : { 'min':100, 'max':100000, 'average' : 15000} }
  if(!data) return 'empty Array'
  let latestTime = Math.max(...(data.data.map(priceObj => priceObj.timeOfCreation.seconds)))
  let rangeObj;
  data.data.map(priceObj => {
    if(priceObj.timeOfCreation.seconds === latestTime) 
      rangeObj = priceObj
    })
  let requiredRange ;
  rangeObj.priceRanges.map(range => {
    if(range.categoryName === category) 
    requiredRange = range;
  })
  return requiredRange;
}

const mapState=(state)=>({
  currentUser:state.user.currentUser,
  priceData : state.priceData.ranges
})

const SellerDesign = ({ heading }) => {
  const fileReader = new FileReader();
  const history = useHistory();
  const dispatch = useDispatch();
  const {currentUser, priceData} = useSelector(mapState);
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('menscloth');
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
    setProductCategory('menscloth');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    setStock(0);
    setProductDesc('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const range = getCategoryRanges( priceData, productCategory )
    if ( productPrice >= range.categoryRange.min && productPrice <= range.categoryRange.max ) {
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
    else{
      ToastsStore.warning(`Please select the price within the given Range. Min Range: PKR ${Math.round(range.categoryRange.min)}. Max Range: PKR ${Math.round(range.categoryRange.max)}`) 
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
            <Button className="dashboardProductButton" onClick={() => {
              dispatch(getPriceRanges())
              toggleModal()}
              }>
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
            <div className="profilePicture">
              <label htmlFor="image">
                <h3>Product Image</h3>
                <div className="text-center align-middle" style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundColor: "#f7f7f7",
                  border: "1px solid #f7f7f7",
                  display: "table-cell",
                  borderRadius: "50%",
                  height: "200px",
                  width: "200px",
                  backgroundSize: "cover",
                  backgroundImage: `url( ${productThumbnail || ""})`
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
                      if (file.size < 1000000) setProductThumbnail(fileReader.result)
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