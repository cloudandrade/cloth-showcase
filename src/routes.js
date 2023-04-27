import React from 'react';
import { Home } from "./pages/Home/index";
import { Produtos } from "./pages/Produtos/index";
import { Sobre } from "./pages/Sobre/index";
import { Contato } from "./pages/Contato/index";
import { Cart } from "./pages/Cart/index";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Login from './pages/Login/index';
//import Register from './pages/Register/index';
/* import NavigationService from './services/NavigationService'; */

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/*  <Route path="/" exact component={Home}></Route> */}
        <Route path="/produtos" component={Produtos}></Route>
        <Route path="/sobre" component={Sobre}></Route>
        <Route path="/contato" component={Contato}></Route>
        <Route path="/contato" component={Cart}></Route>
        <Route path="" default component={Home}></Route>

      </Switch>
    </BrowserRouter>
  );
}