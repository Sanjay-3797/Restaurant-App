import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
