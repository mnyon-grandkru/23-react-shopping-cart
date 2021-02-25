// Stefanie notes:  This is so tedious to me, especially because it takes
//me so long to do anything.  
//FYI -- I spent all of lab on Wednesday trying to help Candice the
//way Thomas helped me.  She was grateful but her code didn't work.

import { createSlice } from '@reduxjs/toolkit';
// import { useDetector, useDispatch} from redux - what?
export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: 0,
    products: []
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setProducts: (state, action) => {
        // console.log(action.payload)
        state.products = action.payload
        
    }
  },
});

export const { increment, decrement, incrementByAmount, setProducts } = productSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const fetchProducts = () => dispatch => {
    fetch('http://localhost:3001/products')
    .then(r => r.json())
    .then(myProducts => {
        // console.log(myProducts)
        dispatch(setProducts(myProducts))
    })
}



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = function (state) {
    return state.product.value;
}

export const selectProducts = function(state) {
    return state.product.products
}

export default productSlice.reducer;
