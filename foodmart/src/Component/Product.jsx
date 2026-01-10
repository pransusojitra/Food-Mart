import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:5000/api/products");

    const updated = res.data.map(item => ({
      ...item,
      qty: 0,
    }));

    setProducts(updated);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // ➕ Add to Cart
  const addToCart = (id) => {
    setProducts(prev =>
      prev.map(item =>
        item._id === id ? { ...item, qty: 1 } : item
      )
    );
  };

  // ➕ Increase
  const increaseQty = (id) => {
    setProducts(prev =>
      prev.map(item =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ Decrease
  const decreaseQty = (id) => {
    setProducts(prev =>
      prev.map(item =>
        item._id === id && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // 💰 Calculate Total
  useEffect(() => {
    const sum = products.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    setTotal(sum);
  }, [products]);

  // 🛒 Cart Items
  const cartItems = products.filter(item => item.qty > 0);

  return (
    <div>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center px-4 mt-3">
        <h3>Trending Products</h3>
        <h5 className="text-success">Total: ₹ {total}</h5>
      </div>

      {/* CART SUMMARY */}
      {cartItems.length > 0 && (
        <div className="px-4 mt-4">
          <h4>Cart Summary</h4>

          <div className="border rounded-4 p-3 shadow-sm">
            {cartItems.map(item => (
              <div
                key={item._id}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <div>
                  <strong>{item.title}</strong>
                  <p className="mb-0 text-muted">
                    Qty: {item.qty} × ₹{item.price}
                  </p>
                </div>

                <strong>₹ {item.qty * item.price}</strong>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <strong>Total</strong>
              <strong className="text-success">₹ {total}</strong>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {products.map(item => (
          <Productcard
            key={item._id}
            img={item.image}
            title={item.title}
            unit={item.unit}
            rating={item.rating}
            price={item.price}
            qty={item.qty}
            onAdd={() => addToCart(item._id)}
            onIncrease={() => increaseQty(item._id)}
            onDecrease={() => decreaseQty(item._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
 