import React from "react";

const OrderFailure = () => {
  return (
    <div>
      <h1>Failed to complete order</h1>
      <Link to="/cart">Go back to cart</Link>
    </div>
  );
};

export default OrderFailure;
