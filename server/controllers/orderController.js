import { Order } from "../models/Order.js";
import Product from "../models/Product.js";
import paystack from "paystack-api";
import User from "../models/User.js";
const Paystack = paystack(process.env.PAYSTACK_SECRET_KEY);

// Place Order COD : /api/order/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    if (!address || items.length === 0) {
      res.json({ success: false, message: "Invalid data" });
    }
    // calculate amount using items
    let amount = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (product) {
        amount += product.offerPrice * item.quantity;
      } else {
        return res.json({ success: false, message: "Product not found" });
      }
    }

    // Add Tax charge (2%)
    amount += Math.floor(amount * 0.02);
    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
    });
    return res.json({ success: true, message: "Order Placed Successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Place Order Paystack : /api/order/paystack
export const placeOrderPayStack = async (req, res) => {
  try {
    const { userId, items, address } = req.body;
    const { origin } = req.headers;

    if (!address || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    // Fetch user email for Paystack
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const email = user.email;

    // Calculate amount in naira, including 2% tax
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (product) {
        amount += product.offerPrice * item.quantity;
      } else {
        return res.json({ success: false, message: "Product not found" });
      }
    }
    amount += Math.floor(amount * 0.02); // Add 2% tax

    // Create order with isPaid: false
    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "Online",
      isPaid: false,
    });

    // Initialize Paystack transaction
    const transaction = await Paystack.transaction.initialize({
      amount: amount * 100, // Convert to kobo for NGN
      email,
      currency: "NGN",
      callback_url: `${origin}/api/order/verify-paystack`,
      metadata: { orderId: order._id.toString() },
    });

    return res.json({
      success: true,
      authorization_url: transaction.data.authorization_url,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const verifyPaystackPayment = async (req, res) => {
  try {
    const { reference } = req.query;
    if (!reference) {
      return res.status(400).json({ message: "No reference provided" });
    }

    // Verify transaction with Paystack
    const transaction = await Paystack.transaction.verify(reference);
    if (transaction.data.status === "success") {
      const orderId = transaction.data.metadata.orderId;
      await Order.findByIdAndUpdate(orderId, { isPaid: true });
      // Redirect to success page
      res.redirect("/order-success");
    } else {
      // Handle failure
      res.redirect("/order-failure");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get orders by user Id : /api/order/user
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.userId;
    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get all orders for sellers / admin : /api/order/seller

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
