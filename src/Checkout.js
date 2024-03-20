import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import Flipmove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img
          className="checkout__ad"
          src="https://5.imimg.com/data5/SELLER/Default/2022/12/ZE/GK/AZ/124515444/seagate-256-ssd-sata-500x500.png"
          alt=""
        /> */}
        {/* <h1>Jai Shree Ram!!!</h1> */}
      </div>
      <div>
        <h4>Hello ,{user?.email}</h4>
        <h2 className="checkout__tittle">Your shopping Basket</h2>
        {basket.map((item) => (
          <Flipmove>
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          </Flipmove>
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
