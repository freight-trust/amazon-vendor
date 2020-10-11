import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthenticateRouter from "./componets/authenticateRouter/AuthenticateRouter";
import Header from "./componets/header/Header";
import Login from "./componets/login/Login";
import ProductList from "./componets/product-list/ProductList";
import ProductSingle from "./componets/productSingle/ProductSingle";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const onLogIn = (loggedInUser) => {
    //GUARDAR USUARIO EN COOKIE
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const onLogOut = () => {
    localStorage.removeItem("user");
    setUser(undefined);
  };

  //PARA ENRUTAR USUARIOS CON ROL
  // if (user) {
  //   return <Redirect to='/home' />
  // }

  return (
    <div className="App">
      <Header user={user} onLogOut={onLogOut} />
      <Switch>
        <AuthenticateRouter
          path="/product"
          render={(props) => (
            <ProductList {...props} user={user} onLogOut={onLogOut} />
          )}
          user={user}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} user={user} onLogIn={onLogIn} />}
        />
        <Route
          path="/product-detail"
          render={(props) => <ProductSingle {...props} user={user} />}
        />
        <Redirect to="/product" />
      </Switch>
    </div>
  );
}

export default App;
