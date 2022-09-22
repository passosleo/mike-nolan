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
        <h1>Final de semana do Mike</h1>
      </div>
      <div className="layout-main">{children}</div>
      <div className="layout-footer">
        {history[currentScreen].hasOptions ? (
          <div>
            <button onClick={() => nextScreen(1)}>{history[currentScreen].option1}</button>
            <button onClick={() => {
              switch (currentScreen) {
                case 25:
                return nextScreen(11);
                case 38: 
                return nextScreen(6);
                case 49: 
                return nextScreen(5);
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
