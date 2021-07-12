import React, {useState ,useEffect } from 'react';
import { fetchProductsStart, deleteProductStart,updateProduct } from '../../../Redux/Products/Products.actions';
import { auth } from '../../../Firebase/utils'
import { Grid, Button,TextField,Tooltip } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import LoadMore from '../../../Components/LoadMore/LoadMore';
import SellerDesign from '../SellerDesign';
import Modal from '../../../Components/Modal/Modal';
import './Products.css';
import CKEditor from 'ckeditor4-react';
import { categories } from '../Categories';
import FormSelect from '../../../Components/FormSelect/FormSelect';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const mapState = ({ productsData}) => ({
  products: productsData.products
});


const Products = () => {
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [productDesc, setProductDesc] = useState('');
  const [documentID, setdocumentID] = useState('');
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const { data, queryDoc, isLastPage } = products;


  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('mens');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    setStock(0);
    setProductDesc('');
  };


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateProduct({
        documentID,
        productName,
        productThumbnail,
        productPrice,
       productCategory, 
       productDesc, 
       stock
      })
    );
      resetForm();
  };

  useEffect(() => {
    dispatch(
      fetchProductsStart(auth.currentUser.uid)
    );
  }, [auth.currentUser.uid]);



  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart(
        auth.currentUser.uid,
        null,
        queryDoc,
        data
      )
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  const handleUpdation=({    productName, productThumbnail,productPrice, documentID,
    productCategory, productDesc, stock})=>{
      toggleModal();
      setProductCategory(productCategory);
      setProductName(productName);
      setProductThumbnail(productThumbnail);
      setProductPrice(productPrice);
      setStock(stock);
      setProductDesc(productDesc);
      setdocumentID(documentID);
         }


  return (
    <div className="sellerProductContainer">
      <SellerDesign heading={'Manage Products'} />
      <Grid container className='results' >

        {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
          const {
            productName,
            productThumbnail,
            productPrice,
            documentID,
            productCategory,
            productDesc,
            stock
          } = product;
          return (
            <Grid container className="containerClass" direction='row' alignItems='center' justify='space-around' spacing={2}>
              <Grid item xs={12} md={2}><img className='thumb' src={productThumbnail} /></Grid>
              <Grid item xs={4} md={3} className='itemFont'>{productName}</Grid>
              <Grid item xs={4} md={2} className='itemFont'>RS.{productPrice}</Grid>
              <Grid item xs={4} md={2} className='itemFont'>quantity
              {stock?(<span>({stock})</span>):(<span>(0)</span>)}</Grid>
              <Grid item  md={1} >
              <Tooltip title='Delete'>
             < DeleteIcon 
              className='sellerProductIcons' 
               onClick={() => dispatch(deleteProductStart(documentID))}
            />  
            </Tooltip>
              </Grid>
              <Grid item  md={1}>
              <Tooltip title='Update Product'>
              <EditIcon className='sellerProductIcons'
               onClick={() => handleUpdation({ productName, productThumbnail, productPrice,
                documentID, productCategory, productDesc, stock})}
              />
              </Tooltip>
              </Grid>
            </Grid>
            
          )
        })}
      </Grid>
      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form className='productForm' onSubmit={handleSubmit}>

            <h2 className="modalHeading">
              Update product detail
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
              Update product
            </Button>

          </form>
        </div>
      </Modal>
      <Grid container>
        <Grid item xs>{!isLastPage && (<LoadMore {...configLoadMore} />)}</Grid>
      </Grid>

    </div>
  )
}

export default Products;
