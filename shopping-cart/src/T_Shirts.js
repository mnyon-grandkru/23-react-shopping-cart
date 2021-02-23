import { Counter } from './features/counter/Counter';
import './App.css';

// const products = items.results;
const titles = products.map(function (item) {
  return `<div class="products">
  <a class="top-links" href="#">
    <div><img class="product-image" src="${item.Images[0].url_fullxfull}"></div>
    <div class="item-name">${item.title}</div>
    <div class="shop-name">${item.Shop.shop_name}</div>
    <div class="stars">*****(${item.views})</div>
    <div class="item-price">$${item.price} </div>
    <div class="placeholder-text">free shipping ...</div>
  </a>
</div>`;
});

// document.querySelector("#grid").innerHTML = titles.join("");


// products.img.normal
// products.title
// products.price
// products.installments
// A BUTTON