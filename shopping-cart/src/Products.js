import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
class Products extends Component {
componentDidMount() {
this.props.fetchProducts();
}
render() {
const { cartItems } = this.props;
const productItems = this.props.products.map((product) => (
<div className="col-md-4 my-5" key={product.id}>
<div className="thumbnail text-center">
<a
href={`#${product.id}`}
onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
>
<img src={`products/${product.sku}_2.jpg`} alt={product.title} />
<p>{product.title}</p>
</a>
<b>{util.formatCurrency(product.price)}</b>
<button
className="btn btn-primary"
onClick={(e) => this.props.addToCart(cartItems, product)}
>
Add to cart
</button>
</div>
</div>
));
return <div className="row">{productItems}</div>;
}
}
const mapStateToProps = (state) => ({
products: state.products.filteredItems,
cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
// // import { Counter } from './features/counter/Counter';
// import './App.css';
// // import {
// //   Link
// // } from 'react-router-dom';
// // import { useState, useEffect } from 'react'
// // import App from './App'
// // export default function SetUpProducts(props) {
// //   const [cards, setCards] = useState([])
// //   useEffect(() => {
// //       fetch("http://localhost:3001/products")
// //           .then((resp) => resp.json())
// //           .then((data) => {
//     //       dispatch(setCards(data)
// //               setCards((data);
// //           });
// //   }, []);
// // }

// function Product {

// }

//   return  (
//     <div className="App">
//        <div className="header"><h6>16 products found</h6><
//         <ul> <div className="bgImage">
//         {cards.map((item) => {
//             return <p align="center" key={item.id}>
//                 <li className="photo">
//                     <Link to={`album/${item.id}`}><img src={item.img.normal} alt="AlbumThumbnail">
//                     </img></Link></li>
//             <li className="caption"><h3>{item.title}</h3></li></p>;
//         })}

//     </ul>
// </div>
// )}
// // // document.querySelector("#grid").innerHTML = titles.join("");


// // // products.img.normal
// // // products.title
// // // products.price
// // // products.installments
// // // A BUTTON

// // // const products = items.results;
// // // const titles = products.map(function (item) {
// // //   return `<div class="products">
// // //   <a class="top-links" href="#">
// // //     <div><img class="product-image" src="${item.Images[0].url_fullxfull}"></div>
// // //     <div class="item-name">${item.title}</div>
// // //     <div class="shop-name">${item.Shop.shop_name}</div>
// // //     <div class="stars">*****(${item.views})</div>
// // //     <div class="item-price">$${item.price} </div>
// // //     <div class="placeholder-text">free shipping ...</div>
// // //   </a>
// // // </div>`;
// // // });