import React from "react";
import "./Laptop.css";
import Product from "./Product";

function Accessories() {
  return (
    <div className="accessories">
      <div className="home3__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      <div className="home3__row">
        <Product
          id="90829332"
          title="Amazon Basics Wired Gaming Keyboard and Mouse Combo | Multicolor RGB LED Backlight Effects, Multimedia Keys, Durable Aluminum Body"
          price={1094.98}
          rating={4}
          image="https://m.media-amazon.com/images/I/71QFAQCR6uL._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Accessories;
