import React, { useEffect, useState } from "react";
import OrderSummery from "./OrderSummery";
import PaymentSection from "./PaymentSection";
import useCartData from "../../hooks/useCartData";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, setCartItems, cartTotals, setCartTotals, tax, loading } =
    useCartData();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  useEffect(
    function () {
      auth();
      console.log(isAuthorized);
    },
    [isAuthorized]
  );

  async function refreshToken() {
    const refreshed_token = localStorage.getItem("refresh");
    try {
      const res = await api.post("/token/refresh", {
        refresh: refreshed_token,
      });
      if (res.status === 200) {
        localStorage.setItem("access", res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  //when page is rendered
  async function auth() {
    const token = localStorage.getItem("access");
    if (!token) {
      setIsAuthorized(false);
      console.log("if : ", false);
      navigate("/login");
      return;
    }
    const decoded = jwtDecode(token);
    const expiry_date = decoded.exp;
    const current_time = Date.now() / 1000;
    if (current_time > expiry_date) {
      await refreshToken();
    } else {
      console.log("else : ", true);
      setIsAuthorized(true);
      // navigate("/checkout")
    }
  }

  // console.log("before return")
  // return(
  //     <div>hello {isAuthorized}</div>
  // )
  if (isAuthorized) {
    return (
      <div className="container my-3" style={{ height: "100vh" }}>
        <div className="row">
          <OrderSummery
            cartItems={cartItems}
            cartTotals={cartTotals}
            tax={tax}
          />
          <PaymentSection />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="text-white">hello:</h1>
        <h1>{isAuthorized}</h1>
      </>
    );
  }
};

export default CheckoutPage;
