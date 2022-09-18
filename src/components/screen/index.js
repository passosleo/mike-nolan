import React from "react";
import { history } from "../../data";
import "./styles.css";

const Screen = ({
  children,
  currentScreen,
  setCurrentScreen,
  totalScreens,
}) => {
  return (
    <div>
      <img src={history[currentScreen].image} width="600px" />
      <p>{history[currentScreen].description}</p>
    </div>
  );
};

export default Screen;
