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
        {products.map(product => <p key={product.id}>
            <img src={product.img.normal}></img>
            {product.title}
            {product.price}
            {product.installments}</p>)}
        </div>
    </div>   
  );
}
