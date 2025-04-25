import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div>
      <h1>Order placed successfully!</h1>
      <Link to="/my-orders">View your orders</Link>
    </div>
  );
};

export default OrderSuccess;
