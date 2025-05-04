import React from "react";

const OrderFailure = () => {
  return (
    <div className="mt-32">
      <h1>Failed to complete order</h1>
      <Link to="/cart">Go back to cart</Link>
    </div>
  );
};

export default OrderFailure;
