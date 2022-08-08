import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          {/*Switch ke jagha Routes use hota ha in v6*/}
          <Route path="/" element={<User />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />

          {/*Redirect ke jagha Navigate use hota ha in v6*/}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
