//create a function to divide product.price by product.installments
// price two decimal points   

// Stefanie notes:  This is so tedious to me, especially because it takes
//me so long to do anything.  
//FYI -- I spent all of lab on Wednesday trying to help Candice the
//way Thomas helped me.  She was grateful but her code didn't work.

// productCard should have border on hover and add object to cart when clicked
// How to do that -- no idea.  I am unable to conceptuatlize it

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  fetchProducts,
  selectCount,
  selectProducts
} from './productSlice';
import styles from './Product.module.css';

// dispatch(increment()) // increment

export function ProductList() {
  const count = useSelector(selectCount);
  const products = useSelector(selectProducts)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

function setInstallment(a, b) {
    let installments = a / b
    return installments.toFixed(2)
}
  return (
    <div className="productCardsContainer">
        <div className="productsHeader"></div>
        {/* <div>{count}</div>
        <button onClick={() => dispatch(increment())}>Sup</button> */}
        <div className="productCard">
            <ul>{products.map(product => <p key={product.id}>
            <li><img src={product.img.normal} alt={product.title}></img></li>
                <li className="productTitle">{product.title}</li>
                <li className="productPrice">${product.price.toFixed(2)}</li>
                <li className="installmentPrice">or {product.installments} x${setInstallment(product.price, product.installments) }</li>
            <button>Add To Cart</button></p>)}
            </ul>
        </div>
    </div>   
  );
}
