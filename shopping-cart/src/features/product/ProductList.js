//create a function to divide product.price by product.installments
// price two decimal points   

// Stefanie notes:  This is so tedious.  I can't stand it.
// Pretty sure this line of work isn't for me.
//I spent all of lab on Wednesday trying to help Candice the
//way Thomas helped me.  She was grateful but her code didn't work.

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

  return (
    <div className="style.row">
        {/* <div>{count}</div>
        <button onClick={() => dispatch(increment())}>Sup</button> */}
        <div className={styles.row}>
            <ul>{products.map(product => <p key={product.id}>
            <li><img src={product.img.normal}></img></li>
                <li>{product.title}</li>
                <li>${product.price}</li>
                <li>or  {product.installments}</li>
            <button>Add To Cart</button></p>)}</ul>

        </div>
    </div>   
  );
}
