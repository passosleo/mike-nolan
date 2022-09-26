import React from "react";
import { history } from "../../data";
import "./styles.css";

const Screen = ({ currentScreen }) => {
  return (
    <div className="screen">
      <img src={history[currentScreen].image} height="400px" alt="cartoon" />
      <p>{history[currentScreen].description}</p>
    </div>
  );
};

export default Screen;
