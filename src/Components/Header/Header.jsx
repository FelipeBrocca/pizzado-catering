import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useCartPopUp from "../../Hooks/useCartPopUp";
import logo from "../../public/images/logo.webp";
import { LoadingContext } from "../../Context/LoadingContext";
import MenuSScreen from "./MenuSScreen";
import MenuBScreen from "./MenuBScreen";

const Header = () => {
  const { setLoading } = useContext(LoadingContext);
  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  };

  const { cartPopUpState, backdropCartPopUp } = useCartPopUp();

  const body = document.getElementById("body");

  useEffect(() => {
    cartPopUpState
      ? body.classList.add("body-cart-fixed")
      : body.classList.remove("body-cart-fixed");
  }, [cartPopUpState, body.classList]);

  return (
    <>
      {cartPopUpState ? backdropCartPopUp : ""}
      <header className="main-header">
        <div className="container-flex-header">
          <div className="main-header-container">
            <Link to="/" className="link-logo">
              <img
                src={logo}
                className="img-logo"
                alt="logo"
                onLoad={handleLoading}
              />
            </Link>
            <MenuSScreen />
            <MenuBScreen />
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Header);
