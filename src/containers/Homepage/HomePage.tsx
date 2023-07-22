// import { useState } from "react";
import bookmarkoLogo from "../../assets/logo.png";
import NavBar from "../../components/NavBar/NavBar.js";

import "./HomePage.css";

function mainPage() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
            <img src={bookmarkoLogo} alt="bookmarko logo" />
        </div>
        <div className="navbar__routs">
            <NavBar />
        </div>
      </div>
    </>
  );
}

export default mainPage;
