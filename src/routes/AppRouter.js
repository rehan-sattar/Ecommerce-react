import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../components/home/Home";
import signUp from "../components/Forms/signUp";
import LoginForm from "../components/Forms/Login";
import notFound from "../components/notFound"
import HeaderLoggedOut from "../components/Headers/loggedOutHeader";
import HeaderLoggedIn from "../components/Headers/loggedInHeader";
import AddProductForm from "../components/userDashboard/addProduct";
import SearchProduct from "../components/userDashboard/searchProduct";
import userDashboard from "../components/userDashboard/dashboard";
import PublicProducts from "../components/PublicProducts/publicProducts"

const AppRouter = () => (
  <main>
    <HeaderLoggedOut />

    {/* <HeaderLoggedIn /> */}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/user/signIn' component={LoginForm} />
      <Route path='/user/signUp' component={signUp} />
      <Route path='/user/publicProducts'component={PublicProducts}/>
      <Route path="/user/publicProducts/:product"/>
      <Route path='/dashboard' exact component={userDashboard} />
      <Route path="/dashboard/addProduct" component={AddProductForm} />
      <Route path="/dashboard/searchProduct" component={SearchProduct} />
      <Route component={notFound} />
    </Switch>
  </main>
);


export default AppRouter;
