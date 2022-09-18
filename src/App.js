import React, { useState } from "react";
import Layout from "./components/layout";
import Screen from "./components/screen";
import { history } from "./data";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  return (
    <Layout
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
      totalScreens={history.length - 1}
    >
      <Screen currentScreen={currentScreen} />
    </Layout>
  );
};

export default App;
