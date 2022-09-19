import React from "react";
import { history } from "../../data";
import "./styles.css";

const Layout = ({
  children,
  currentScreen,
  setCurrentScreen,
  totalScreens,
}) => {
  console.log(currentScreen)
  const nextScreen = (count) => {
    return (
      currentScreen !== totalScreens && setCurrentScreen(currentScreen + count)
    );
  };

  return (
    <div className="layout-body">
      <div className="layout-header">
        <h1>Mike Nolan - Indo Pescar</h1>
      </div>
      <div className="layout-main">{children}</div>
      <div className="layout-footer">
        {history[currentScreen].hasOptions ? (
          <div>
            <button onClick={() => nextScreen(1)}>{history[currentScreen].option1}</button>
            <button onClick={() => {
              switch (currentScreen) {
                case 9: return  nextScreen(8)
                case 19: return nextScreen(4)
                case 19: return nextScreen(4)
              }
            
            }}>{history[currentScreen].option2}</button>
          </div>
        ) : currentScreen !== totalScreens ? (
          <button onClick={() => nextScreen(1)}>Next</button>
        ) : (
          <button onClick={() => setCurrentScreen(0)}>Restart</button>
        )}
      </div>
    </div>
  );
};

export default Layout;
