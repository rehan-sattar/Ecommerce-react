import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../components/home/Home";
import signUp from "../components/Forms/signUp";
import notFound from "../components/notFound"
import HeaderLoggedOut from "../components/Headers/loggedOutHeader";
import HeaderLoggedIn from "../components/Headers/loggedInHeader";
import userDashboard from "../components/userDashboard/dashboard";

const AppRouter = () => (
  <main>
    <HeaderLoggedOut />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/createAccount' component={signUp}/>
      <Route path='/dashboard' component={userDashboard}/>
      <Route component={notFound}/>
    </Switch>
  </main>
);


export default AppRouter;
