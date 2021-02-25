import React, { useEffect } from "react";
import "./App.css";
import { Login } from "./components/Login";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {

  return (
    <Provider store={store}>
      <Login></Login>
    </Provider>
  );
};

export default App;
