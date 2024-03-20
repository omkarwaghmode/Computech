import React from "react";
import "./Laptop.css";
import Product1 from "./Product1";

function Laptop() {
  return (
    <div className="laptop">
      <div className="home1__row">
        <Product1
          id="6664646"
          title="13‑inch MacBook Pro - Space Grey M2"
          s
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41lpiu-GMXL._SY445_SX342_QL70_FMwebp_.jpg"
        />

        <Product1
          id="6664733"
          title="HP Pavilion Laptop 15,12th Gen Intel Core i5-1240P 15.6 inch(49.6cm) FHD IPS Laptop(16GB RAM/512GB SSD/Intel Iris Xe Graphics/Win 11/MSO 2021/Backlit/Flicker Free/B&O/Alexa)"
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51pw-WvvlYL._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>

      <div className="home1__row">
        <Product1
          id="62822928"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      <div className="home1__row">
        <Product1
          id="90829332"
          title="Dell Vostro 3420 Laptop,12th Gen Intel Core i5-1235U, 8GB & 512GB SSD, "
          price={1094.98}
          rating={4}
          image="https://m.media-amazon.com/images/I/617Ob9YOSSL._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Laptop;
