import React, {useState ,useEffect } from 'react';
import { fetchProductsStart, deleteProductStart } from '../../../Redux/Products/Products.actions';
import { auth } from '../../../Firebase/utils'
import { Grid, Button,TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import LoadMore from '../../../Components/LoadMore/LoadMore';

// import FormSelect from '../../../Components/FormSelect/FormSelect';

const mapState = ({ productsData }) => ({
  products: productsData.products
});


const AllProducts = () => {
  
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const { data, queryDoc, isLastPage } = products;

  
  useEffect(() => {
    dispatch(
      fetchProductsStart()
    );
  }, []);



  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart(
        null,
        null,
        queryDoc,
        data
      )
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };


  return (
    <div className="sellerProductContainer">
    
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
              <Grid item xs={12} md><img className='thumb' src={productThumbnail} /></Grid>
              <Grid item xs={6} md={3} className='itemFont'>{productName}</Grid>
              <Grid item xs={6} md={3} className='itemFont'>RS.{productPrice}</Grid>
              <Grid item xs={6} md={3} className='itemFont'>Stock{stock?(<span>({stock})</span>):(<span>(0)</span>)}</Grid>
              
              <Grid item xs={6} md={3} className='deleteBtn'>
                <Button onClick={() => dispatch(deleteProductStart(documentID))}>Delete</Button>
                
              </Grid>
            </Grid>
            
          )
        })}
      </Grid>
    
      <Grid container>
        <Grid item xs>{!isLastPage && (<LoadMore {...configLoadMore} />)}</Grid>
      </Grid>

    </div>
  )
}

export default AllProducts;
