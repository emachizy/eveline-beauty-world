import logo from "../assets/logo.png";
import search_icon from "../assets/search-icon.png";
import nav_cart_icon from "../assets/cart.png";
import profile_icon from "../assets/profile_icon.png";
import main_banner_bg from "../assets/main_banner_bg.jpg";
import main_banner_bg_sm from "../assets/main_banner_bg_sm.jpg";
import left_arrow from "../assets/left-arrow.png";
import right_arrow from "../assets/right-arrow.png";
import right_arrow_white from "../assets/right-arrow-white.png";
import category_img1 from "../assets/category-img1.png";
// import category_img2 from "../assets/category-img2.png";
import category_img3 from "../assets/category-img3.png";
import product1_img1 from "../assets/product1_img1.jpg";
import product1_img2 from "../assets/product1_img2.jpg";
import product1_img3 from "../assets/product1_img3.jpg";
import product1_img4 from "../assets/product1_img4.jpg";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import bottom_banner_img from "../assets/bottom-banner-img.jpg";

export const assets = {
  logo,
  search_icon,
  nav_cart_icon,
  profile_icon,
  main_banner_bg,
  main_banner_bg_sm,
  left_arrow,
  right_arrow,
  right_arrow_white,
  star_icon,
  star_dull_icon,
  bottom_banner_img,
};

export const categories = [
  {
    text: "First product",
    path: "Organic",
    image: category_img1,
    bgColor: "#FEF6DA",
  },
  {
    text: "Second product",
    path: "Organic",
    image: category_img3,
    bgColor: "#fee0e0",
  },
  {
    text: "Third product",
    path: "Organic",
    image: category_img1,
    bgColor: "#CAC7A7",
  },
  {
    text: "Fourth product",
    path: "Organic",
    image: category_img1,
    bgColor: "#A8C7C0",
  },
  {
    text: "Fifth product",
    path: "Organic",
    image: category_img3,
    bgColor: "#EED7C2",
  },
  {
    text: "Fifth product",
    path: "Organic",
    image: category_img1,
    bgColor: "#ECE8E5",
  },
  {
    text: "Fifth product",
    path: "Organic",
    image: category_img3,
    bgColor: "#DFB4B5",
  },
];

export const dummyProducts = [
  {
    _id: "gd46g23h",
    name: "Hair cream",
    category: "pomade",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img1, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd47g34h",
    name: "Hair cream",
    category: "pomade",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img2, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd48g45h",
    name: "Hair cream",
    category: "pomade",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd49g56h",
    name: "Hair cream",
    category: "pomade",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img1, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd44g67h",
    name: "Hair cream",
    category: "pomade",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img2, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
];
