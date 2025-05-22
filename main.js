"use strict";

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "img/air.png",
      },
      {
        code: "darkblue",
        img: "img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "img/jordan.png",
      },
      {
        code: "green",
        img: "img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "img/blazer.png",
      },
      {
        code: "green",
        img: "img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "img/crater.png",
      },
      {
        code: "lightgray",
        img: "img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "img/hippie.png",
      },
      {
        code: "black",
        img: "img/hippie2.png",
      },
    ],
  },
];

const navBar = document.querySelectorAll(".nav-item");
const slidderItem = document.querySelectorAll(".slidder-item");
const slidderWrapper = document.querySelector(".slidder-wrapper");

const productTitle = document.querySelector(".product-title");
const productImg = document.querySelector(".product-img");
const productPrice = document.querySelector(".product-price");
const productColors = document.querySelectorAll(".product-color");
const productSize = document.querySelectorAll('.size')

let selectedProduct = products[0];

navBar.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked" + index);

    slidderWrapper.style.transform = `translateX(${-100 * index}vw)`;

    selectedProduct = products[index];

    console.log(selectedProduct);

    productTitle.textContent = selectedProduct.title;
    productImg.src = selectedProduct.colors[0].img;
    productPrice.textContent = " $ " + selectedProduct.price;

    productColors.forEach((color, index) => {
      color.style.backgroundColor = selectedProduct.colors[index].code;
    });
  });
});



productColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    productImg.src = selectedProduct.colors[index].img;
  })
})

productSize.forEach((size, index) => {
  size.addEventListener('click', () => {
    productSize.forEach(size => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    })
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  })
})

const paymentOverlay = document.querySelector('.payment-overlay');

document.querySelector('.buy-now').addEventListener('click', () => {
   paymentOverlay.style.display = 'flex';
})

document.querySelector('.exit').addEventListener('click', () => {
  paymentOverlay.style.display = 'none';
})