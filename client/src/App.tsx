import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
