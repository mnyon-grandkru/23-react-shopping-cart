import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

import { 
    add,
    selectTodos
} from ./todoSlice'


export function TodoApp() {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch();
  function handleSubmit(e) {
      e.preventDefault(
          dispatch(add('hello'))
      )
  }

  return (
    <div>
     
    </div>
  );
}
//i don't know why i have red squiggly lines