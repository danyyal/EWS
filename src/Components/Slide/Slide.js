import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slide.css';
import { Link} from 'react-router-dom';
import  {useSelector,useDispatch} from 'react-redux';
import { Button } from '@material-ui/core';
import {fetchProductStart} from '../../Redux/Products/Products.actions';

const mapState =({productsData})=>({
  products:productsData.products
})

const Slide=() =>{
  const dispatch = useDispatch();
const {products} = useSelector(mapState);
const {data} = products;
useEffect(() => {
  dispatch(fetchProductStart());
}, [])

  return (
    <>
     {/* <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} interval={2000} >
          { data && data.length>0 ? data.map((product, index) => {
                    const { productThumbnail, productName, productPrice, productDesc } = product;
                    if (!productThumbnail || !productName || typeof productPrice === 'undefined') return null;
                    return (
                     
                      <div>
                        <img alt="" src={productThumbnail} />
                        <div className='legend'>
                          <h1>{productName}</h1>
                          <p>{productDesc}</p>
                          <h5>Price:{productPrice}</h5>
                          <Link to='/Checkout' className='btn'>BUY NOW</Link>
                        </div>
                
                      </div>
                
                    
                    );
                }) : 'Loading...'
                
                }
                </Carousel>
                  */}
    <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} interval={3000} >
    
      <div className="flexingslider">
        <div className='sliderText'>
          <div className="sliderTextInner">
            <h2>Beautify the World</h2>
            <p>All Kinds of makeup accessories available</p>
            {/* <Button><Link to='/Checkout' className='btn'>Get Now</Link></Button> */}
          </div>
        </div>
        <img alt="" src="/images/slide-1.jpg" />
      </div>

      <div className="flexingslider">
        <div className='sliderText'>
          <div className="sliderTextInner">
            <h2>Electronics</h2>
            <p>Electronics and Accessories</p>
            {/* <Button><Link to='/cart-page' className='btn'>Get Now</Link></Button> */}
          </div>
        </div>
        <img alt="" src="/images/slide-2.jpg" />
      </div>

      <div className="flexingslider">
        <div className="sliderText">
          <div className="sliderTextInner">  
            <h2>Clothing</h2>
            <p className="sliderTextDesc">All kinds of Clothes available</p>
            {/* <Button><Link to='/cart-page' className='btn'>Get Now</Link></Button> */}
          </div>
        </div>
        <img alt="" src="/images/slide-3.jpg" />
      </div>

      <div className="flexingslider">
        <div className="sliderText">
          <div className="sliderTextInner">
            <h2>Get perfection</h2>
            <p className="sliderTextDesc">Different types of Vehicles</p>
            {/* <Button><Link to='/cart-page' className='btn'>Get Now</Link></Button> */}
          </div>
        </div>
        <img alt="" src="/images/slide-4.jpg" />
      </div>
    </Carousel>
    </>
  );
}
export default Slide;