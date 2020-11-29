import React from "react";
import { Link, BrowserRouter, Route, Switch, Router } from "react-router-dom";
import "../styles/HeaderComponent.css";

const HeaderComponent = () => {
  const sayHi = () => {
    console.log("Say Hi");
  };

  return (
    <BrowserRouter>
      <div className="navBar">
        <Switch>
          <Route path="/Blog" render={sayHi} />
          <Route path="/Home" render={sayHi} />
        </Switch>

        <ul>
          <Link to="/Blog">
            <li>Blog</li>
          </Link>
          <Link to="/Home">
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </BrowserRouter>
  );
};

export default HeaderComponent;
