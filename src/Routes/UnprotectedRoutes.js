import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import { NonRegisteredMemberContextProvider } from "../Context/NonRegisteredMemberContext";

const AuthenticationRoutes = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#faf4f4",
          heigth: "100vh",
          justifyContent: "space-between",
        }}
      >
        <NonRegisteredMemberContextProvider>
          <Switch>
            <Route
              path="/team-086-group-a-frontend/"
              exact={true}
              component={LandingPage}
            />
          </Switch>
        </NonRegisteredMemberContextProvider>
      </div>
    </div>
  );
};
export default AuthenticationRoutes;
