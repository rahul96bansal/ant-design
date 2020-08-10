import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import NormalLoginForm from "./components/NormalLoginForm"
import Test from "./components/container";
import ShowTableTest from "./components/tableContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Test />
      <ShowTableTest />
    </Provider>
  );
}

export default App;
