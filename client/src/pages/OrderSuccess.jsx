import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="mt-32">
      <h1>Order placed successfully!</h1>
      <Link to="/my-orders">View your orders</Link>
    </div>
  );
};

export default OrderSuccess;
