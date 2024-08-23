import React, { useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "./redux/CartSlice";
// import Breadcrum from "./Breadcrums/Breadcrum";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  },  [cart, dispatch])

  const handleRemoveFromCart = (cartIem) => {
    dispatch(removeFromCart(cartIem))
  }
  const handleIncreaseCart = (cartIem) => {
    dispatch(addToCart(cartIem))
  }

  const handleDecreaseCart = (cartIem) => {
    dispatch(decreaseCart(cartIem))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="w-11/12 m-auto mt-20">
      <h2 className="text-center text-[#807d7e] text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="text-center">
          <p className="mb-2 text-lg font-semibold">Your Cart Is Empty</p>
          <div className="text-center">
            <Link  className="flex items-center justify-center" to="/shop">
              <FaArrowLeft className="animate-pulse"/>
              <span className="ml-2 font-medium">Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>

          <div className="mt-20 grid grid-cols-5 w-full border py-4 px-4 text-center bg-[#3c4242] text-white">
            <h3 className="text-[12px] md:text-sm font-medium uppercase">Product</h3>
            <h3 className="text-[12px] md:text-sm font-medium uppercase">Price</h3>
            <h3 className="text-[12px] md:text-sm font-medium uppercase">Quantity</h3>
            <h3 className="text-[12px] md:text-sm font-medium uppercase">Total</h3>
            <h3 className="text-[12px] md:text-sm font-medium uppercase">action</h3>
          </div>
          <div className="border w-full pt-2  ">
          {cart.cartItems?.map((cartIem) => (
            <div className="grid grid-cols-5  items-center border-b py-4 " key={cartIem.id}>
              <div className="flex gap-4 w-full h-full ml-3">
                <img className="w-[60px] h-[100px] rounded-xl object-cover" src={cartIem.img} alt="" />
                <div className="mt-4 font-semibold  lg:block hidden ">
                  <h3>{cartIem.title}</h3>
                  <p className="text-[#807d7e]">{cartIem.brand}</p>
                </div>
              </div>
              <div className="text-center font-semibold">
                <span>${cartIem.price}</span>
              </div>
              <div className="flex items-center justify-center cursor-pointer ">
                <button onClick={() => handleDecreaseCart(cartIem)} className="text-sm border px-2 rounded hover:bg-[#3c4242] hover:text-white">-</button>
                <div className="px-2 md:px-4  font-semibold">{cartIem.cartQuantity}</div>
                <button onClick={() => handleIncreaseCart(cartIem)} className="text-sm border px-2 rounded hover:bg-[#3c4242] hover:text-white">+</button>
              </div>
              <div className="text-center font-semibold">
                ${cartIem.price * cartIem.cartQuantity}
              </div>
              <div className="text-center text-red-500">
              <button onClick={() => handleRemoveFromCart(cartIem)}><BsTrash3 /></button>
              </div>
            </div>
          ))}
          </div>
          <div className="flex-wrap md:flex items-center mt-4 md:mt-0 justify-between">
            <div>
            <button onClick={() => handleClearCart()} className=" border py-2 px-4 bg-[#3c4242] rounded-md hover:bg-black text-white font-semibold text-xl">Clear Cart</button>
            </div>
            <div className="">
              <div className="flex justify-between  items-center mt-4">
                <span className="text-xl font-semibold">Subtotal</span>
                <span className="text-xl font-semibold">${cart.cartTotalAmount}</span>
              </div>
              <p className="font-semibold text-[#807d7e] mt-2">Taxes and shipping calculated at checkout</p>
              <div className="text-center border cursor-pointer my-4 bg-[#3c4242] hover:bg-black text-white rounded-md">
              <button className="text-center py-2 font-semibold ">Check Out</button>
              </div>
              <div>
            <Link className="flex items-center" to="/shop">
              <FaArrowLeft className="animate-pulse" />
              <span className="ml-4 font-semibold">Continue Shopping</span>
            </Link>
          </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
