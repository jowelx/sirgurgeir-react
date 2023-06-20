import { Route, Redirect } from "react-router-dom";
import Home from "../views/Home/Home";
import React from "react";
import { Switch } from "react-router-dom";
import About from "../views/about/About";
import Product from "../views/products/Prodcuct";
import SearchProducts from "../views/SearchProducts/SearchProducts";
import PrincipalPage from "../views/ProncopalPage/PrincipalPage";
import Contact from "../views/Contact/Contact";
import Cart from "../views/Cart/Cart";
import IndexLogin from "../views/Login";
import PaymentGateWay from "../views/PaymentGateway/PaymentGateway";
import WishList from "../views/Wishlist/WishList";
import Succes from "../views/PaymentGateway/Succes/Succes";
interface PublicRouteProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...options
}) => {
  const isAuth = false;
  if (!isAuth) return <Route {...options} component={Component} />;
  return <Redirect to="/" />;
};

const Routes: React.FC = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute path="/about" component={About} />
      <PublicRoute path="/product" component={Product} />
      <PublicRoute path="/SearchProduct" component={SearchProducts} />
      <PublicRoute path="/PrincipalPage" component={PrincipalPage} />
      <PublicRoute path="/Contact" component={Contact} />
      <PublicRoute path="/Cart" component={Cart} />
      <PublicRoute path="/Login" component={IndexLogin} />
      <PublicRoute path="/payment" component={PaymentGateWay} />
      <PublicRoute path="/wishList" component={WishList} />
      <PublicRoute path='/paymentSuccess' component={Succes}/>
    </Switch>
  );
};

export default Routes;
