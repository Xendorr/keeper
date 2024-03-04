import React from "react";
import "../styles/components/Header.css";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Header = () => {
  return (
    <>
      <header className="header__container">
        <AutoStoriesIcon />
        <h1 className="header__container-title">Keeper</h1>
      </header>
    </>
  );
};

export default Header;
