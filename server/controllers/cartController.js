// Update user CartData : /api/cart/update

import User from "../models/User.js";

export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const userId = req.user.userId;
    // console.log(cartItems, userId);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { cartItems } },
      { new: true }
    );
    if (!updatedUser) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
