import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { AuthRoute, ProtectedRoute } from "../util/route";
import './App.css';

const App = () => (
  <>
    <h1>Hello</h1>
    <Route exact path="/" component={Welcome} />
    <AuthRoute path="/login" component={Login} />
    <AuthRoute path="/signup" component={Signup} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
  </>
);

export default App;