import React from "react";
import { useRoutes } from "react-router-dom";

import Header from "./Components/Header";
import routes from "./routes";
import CartContextProvider from "./Context/CartContext";

function App() {
  const router = useRoutes(routes);

  return (
    <CartContextProvider>
      <div className="app">
        <Header />
        {router}
        <footer>
          <a target={"_blank"} href="https://www.linkedin.com/in/salehi-dev">
            Aref Salehi
          </a>
        </footer>
      </div>
    </CartContextProvider>
  );
}

export default App;
