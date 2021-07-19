import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../Redux/Products/Products.actions';
import './ProductsResult.css';
import Product from './Product/Product';
import FormSelect from '../FormSelect/FormSelect'
import { filterCate } from '../../Pages/Seller/Categories';
import LoadMore from '../LoadMore/LoadMore';


const mapState = ({ productsData }) => ({
    products: productsData.products
})

const ProductsResult = ({ }) => {
    const history = useHistory();
    const { filterType } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(mapState);

    const { data, queryDoc, isLastPage } = products;

    const handleFilter = (e) => {
        const nextFilter = e.target.value;
        history.push(`/Products/${nextFilter}`);
    }

    useEffect(() => {
        dispatch(fetchProductsStart(null, filterType));

    }, [filterType]);

    if (!Array.isArray(data)) return null;
    if (data.length < 1) {
        return (
            <div>
                <FormSelect className="formSelector"
                    defaultValue={filterType}
                    options={filterCate}
                    onChange={handleFilter}
                />
                <div className='products'>
                    <span className="noProduct">No search Result :(</span>
                </div>
            </div>
        );
    }

    const handleLoadMore = () => {
        dispatch(fetchProductsStart(null, filterType, queryDoc, data));
    }
    const configLoadMore = {
        onLoadMoreEvt: handleLoadMore
    }

    return (
        <div>
            <input 
            value={(e)=>e.target.value}
            // onChange={}
            />

            <FormSelect className="formSelector"
                defaultValue={filterType}
                options={filterCate}
                onChange={handleFilter}
            />
            <div className='products'>
                {data.map((product, index) => {
                    const { productThumbnail, productName, productPrice, stock } = product;
                    if (!productThumbnail || !productName || typeof productPrice === 'undefined') return null;
                    
                    const configProduct = { ...product };
                
                    return (
                        <Product {...configProduct} />
                    );
                })}
            </div>
            {!isLastPage && (
                <LoadMore {...configLoadMore} />
            )}

        </div>
    )
}

export default ProductsResult;
