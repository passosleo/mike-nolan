import React from "react";
import { history } from "../../data";
import "./styles.css";

const Layout = ({
  children,
  currentScreen,
  setCurrentScreen,
  totalScreens,
}) => {
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
            {/* se clicar na opção 1 pega o dialogo alternativo (segue na ordem certa, tela + 1) */}

            <button onClick={() => nextScreen(1)}>Option 1</button>
            {/* se clicar na opção 2 pula o dialogo alternativo, informar na função abaixo quantas telas deve pular (dica: da pra fazer um switch, e pra cada tela que tiver escolha pula uma quantidade X, ex.: se tiver na tela 3, essa tela tem escolha e o dialogo alternativo dela tem 3 telas, entao pula 3 telas) */}
            <button onClick={() => nextScreen(3)}>Option 2</button>
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
