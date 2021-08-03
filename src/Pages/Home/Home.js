import React, { useEffect } from 'react'
import Slide from '../../Components/Slide/Slide';
import Product from '../../Components/ProductsResult/Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { fetchProductsStart } from '../../Redux/Products/Products.actions';
import AboutUsHomeSection from '../../Components/AboutUsHomeSection/AboutUsHomeSection'
import './Home.css';


const mapState = ({ productsData }) => ({
  products: productsData.products
})


const Home = () => {
  const { products } = useSelector(mapState);
  const { data } = products;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());


  }, []);


  return (
    <div>

      <Slide />
      <Link className='linkStyle' to='/Products'><h1 className='head'>OUR PRODUCTS</h1></Link>
      <div className='products'>

        {data && data.length > 0 ? data.map((product, index) => {
          const { productThumbnail, productName, productPrice, stock } = product;
          if (!productThumbnail || !productName || typeof productPrice === 'undefined') return null;
          const configProduct = { ...product };

          return (

            <Product {...configProduct} />
          );
        }) : 'Loading...'

        }
      </div>

      <Button className='showBtn'><Link className='linkStyle' to='/Products'>Show More</Link></Button>

      <AboutUsHomeSection />



    </div>
  )
}

export default Home
