import React, { useState, useEffect } from "react";

export const CartList = ({ coursesCart, onPay }) => {
  const [totalPay, setTotalPay] = useState(0);

  useEffect(() => {
    let sumPrice = 0;
    coursesCart.forEach((course) => {
      sumPrice += course.price;
    });
    setTotalPay(sumPrice);
  }, [coursesCart]);

  return (
    <div className="cart">
      {coursesCart.length > 0 && (
        <ul className="cart-list">
          {coursesCart.map((course, index) => (
            <li key={index} className="cart-line">
              <h1>{course.title}</h1>
              <h2>{course.price}$</h2>
            </li>
          ))}
          {totalPay > 0 && <p className="total-cart">Total: <span>{totalPay}$</span></p>}
          <button
            className="btn pay-btn"
            onClick={() => {
              onPay(totalPay);
            }}
          >
            Pay
          </button>
        </ul>
      )}
    </div>
  );
};
