import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../components/home/Home";
import signUp from "../components/Forms/signUp";
import HeaderLoggedOut from "../components/Headers/loggedOutHeader";

const AppRouter = () => (
  <main>
    <HeaderLoggedOut />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/createAccount' component={signUp}/>
       {/* <Route path='/schedule' component={Schedule}/> */}
    </Switch>
  </main>
);


export default AppRouter;
