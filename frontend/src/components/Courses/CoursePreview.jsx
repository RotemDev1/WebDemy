import React from "react";
import { addProductToCart } from "../../store/actions/PurchaseAction";
import { useSelector, useDispatch } from "react-redux";
export function CoursePreview({ course }) {

  const dispatch = useDispatch();
  const { id, language, img, price, mentor, category } = course;
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const cart = useSelector((state) => state.purchaseModule.cart);

  const addCourseToCart = (cart, course) => {
    dispatch(addProductToCart(cart, course))
  }

  return (
    <div className="course-preview">
      <div className="details">
        <h4>{category}</h4>
        <label className="mentor">{mentor}</label>
      </div>
      <div className="actions">
        <button onClick={(cart, course) => { addCourseToCart(cart, course) }}>Add to cart</button>
        {loggedInUser.role == "admin" && <button>Delete</button>}
      </div>
    </div>
  );
}
