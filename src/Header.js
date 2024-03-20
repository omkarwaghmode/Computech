import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tG5-kkGTVb2Q8G-h0Tjw2pNo0YqbdTTguuWxq79RFLnVpQ-t7INifbTq__i6_rWhQaM&usqp=CAU"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          placeholder="A one stop destinaton for all your computer's requirement "
          type="text"
        />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {" "}
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
