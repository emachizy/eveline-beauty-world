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
import bottom_banner_img_mobile from "../assets/bottom-banner-img-mobile.jpg";
import delivery_truck_icon from "../assets/delivery-truck-icon.png";
import leaf_icon from "../assets/leaf-icon.png";
import coin_icon from "../assets/coin_icon.png";
import trust_icon from "../assets/trust-icon.png";
import menu_icon from "../assets/menu-icon.png";
import remove_icon from "../assets/remove_icon.svg";
import arrow_right_icon_colored from "../assets/arrow_right_icon_colored.svg";
import add_address_image from "../assets/add_address_image.svg";

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
  bottom_banner_img_mobile,
  menu_icon,
  remove_icon,
  arrow_right_icon_colored,
  add_address_image,
};

export const categories = [
  {
    text: "First product",
    path: "Pomade",
    image: category_img1,
    bgColor: "#FEF6DA",
  },
  {
    text: "Second product",
    path: "Nails",
    image: category_img3,
    bgColor: "#fee0e0",
  },
  {
    text: "Third product",
    path: "Effect",
    image: category_img1,
    bgColor: "#CAC7A7",
  },
  {
    text: "Fourth product",
    path: "Feet",
    image: category_img1,
    bgColor: "#A8C7C0",
  },
  {
    text: "Fifth product",
    path: "Pomade",
    image: category_img3,
    bgColor: "#EED7C2",
  },
  {
    text: "Fifth product",
    path: "Nails",
    image: category_img1,
    bgColor: "#ECE8E5",
  },
  {
    text: "Fifth product",
    path: "effect",
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
    name: "Skin Care",
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
    name: "Nail Care",
    category: "Nails",
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
    name: "Soap",
    category: "effect",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img1, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd49g52h",
    name: "Soap",
    category: "effect",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd49g59h",
    name: "Soap",
    category: "effect",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img4, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd69g56h",
    name: "Soap",
    category: "effect",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img2, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd49g16h",
    name: "Soap",
    category: "effect",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img1, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd49g96h",
    name: "Soap",
    category: "effect",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd44g67h",
    name: "Pedicure",
    category: "Feet",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img2, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd44g87h",
    name: "Pedicure",
    category: "Feet",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img4, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd44g27h",
    name: "Pedicure",
    category: "Feet",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img4, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd44g37h",
    name: "Pedicure",
    category: "Feet",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img4, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd14g97h",
    name: "Pedicure",
    category: "Feet",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img4, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd34g57h",
    name: "Pedicure",
    category: "Feet",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img4, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd64g47h",
    name: "Pedicure",
    category: "Feet",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img4, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd49g55h",
    name: "Nail Care",
    category: "Nails",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd41g46h",
    name: "Nail polish",
    category: "Nails",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd42g91h",
    name: "Nail Care",
    category: "Nails",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd78g15h",
    name: "Nail polish",
    category: "Nails",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd28g46h",
    name: "Nail Care",
    category: "Nails",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
  {
    _id: "gd18g39h",
    name: "Nail polish",
    category: "Nails",
    price: 10.99,
    offerPrice: 9.99,
    image: [product1_img3, product1_img2, product1_img3, product1_img4],
    description: ["This is a product", "Fresh and organic", "Best quality"],
    createdAt: "2025-04-25T07:17:46.018Z",
    updatedAt: "2025-04-25T07:18:18.103Z",
    inStock: true,
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest delivery in th game",
    description: "We deliver your products in 24 hours",
  },
  {
    icon: leaf_icon,
    title: "Fresh and organic products",
    description: "Our products are made from natural ingredients",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "We offer the best prices in the market",
  },
  {
    icon: trust_icon,
    title: "Trusted by thousands",
    description: "Our customers trust us for their shopping needs",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers and Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQS", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return and Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Facebook", url: "#" },
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Tiktok", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    currency: "$",
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
