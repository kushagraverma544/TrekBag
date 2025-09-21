import React from "react";
import Logo from "./Logo";
import CounterComponent from "./CounterComponent";

const HeaderComponent = ({ selectedItems, totalItems }) => {
  return (
    <header>
      <Logo />
      <CounterComponent selectedItems={selectedItems} totalItems={totalItems} />
    </header>
  );
};

export default HeaderComponent;
