import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../store/cartSlice';
import {addwishProducts} from '../store/whishSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';

function Products() {
    const { data: products, status } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(addProductToCart(product)).then(()=>{
            alert("Item added to cart!")
        })
    };

    const handleAddwish = async(product)=>{
        dispatch(addwishProducts(product)).then(()=>{
            alert("Item added to wishlist!")
        });
    }

    if (status === STATUSES.LOADING) {
        return <h2>LOADING.....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong...</h2>;
    }
    
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product._id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <div className='buttons'>
                    <button onClick={() => handleAdd(product)} className="btn">
                     Add to Cart
                    </button>
                    <button className='btn' onClick={() => handleAddwish(product)}>
                     Add to Whishist
                    </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
