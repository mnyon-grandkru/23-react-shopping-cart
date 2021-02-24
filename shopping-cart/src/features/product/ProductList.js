import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  fetchProducts,
  selectCount,
  selectProducts
} from './productSlice';

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
    <div>
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>Sup</button>
        {products.map(product => <p key={product.id}>{product.title}</p>)}
    </div>
        
  );
}
