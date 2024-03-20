import React from "react";
import "./Laptop.css";
import Product from "./Product";

function Components() {
  return (
    <div className="componenets">
      <div className="home2__row">
        <Product
          id="12321341"
          title="HP v236w USB 2.0 64GB Pen Drive, Metal"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61xNG4wjOuL._SX679_.jpg"
        />
        <Product
          id="49538094"
          title="Seagate Barracuda Q5 SSD 500GB up to 2400 MB/s - Internal M.2 NVMe PCIe Gen3 ×4, 3D QLC for Desktop or Laptop, 1-Year Rescue Services "
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/51vl9-BQj-L._SL1000_.jpg"
        />
      </div>

      <div className="home2__row">
        <Product
          id="4903850"
          title="Gigabyte GeForce GTX 1060 Mini ITX OC 3GB GDDR5 Graphics Card (GV-N1060IXOC-3GD) "
          price={199.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/81zFS0wB3oL._SL1500_.jpg"
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

      <div className="home2__row">
        <Product
          id="90829332"
          title="CORSAIR Vengeance 16GB RAM (1x16GB) DDR5 DRAM 5200MHz Memory Kit Black CMK16GX5M1B5200C40"
          price={1094.98}
          rating={4}
          image="https://m.media-amazon.com/images/I/517L-2gEq-L._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Components;
