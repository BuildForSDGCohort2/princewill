import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SigninRegistrationPage from "../Pages/RegistrationPages/SigninRegistration";
import SignupRegistrationPage from "../Pages/RegistrationPages/RegistrationPages";
import MenuPage from "../Pages/menuPage/MenuPage";
import UserDashBoard from "../Pages/User_dashboard/UserDashboard";
import UnProtectedRoutes from "./UnprotectedRoutes";
import ProtectedRoutes from "./ProtectRouted";
import NotFoundPage from "../Pages/NotFoundPages/NotFound";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <UnProtectedRoutes
            path="/team-086-group-a-frontend/"
            exact
            component={LandingPage}
          />

          <UnProtectedRoutes
            path="/team-086-group-a-frontend/home"
            component={LandingPage}
          />

          <UnProtectedRoutes
            path="/team-086-group-a-frontend/signin"
            component={SigninRegistrationPage}
          />

          <UnProtectedRoutes
            path="/team-086-group-a-frontend/signup"
            component={SignupRegistrationPage}
          />

          <UnProtectedRoutes
            path="/team-086-group-a-frontend/signin"
            component={SigninRegistrationPage}
          />

          <ProtectedRoutes
            path="/team-086-group-a-frontend/menu"
            component={MenuPage}
          />
          <ProtectedRoutes
            path="/team-086-group-a-frontend/dashboard"
            component={UserDashBoard}
          />
          <Route render={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
