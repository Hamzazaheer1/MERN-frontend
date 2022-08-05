import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*Switch ke jagha Routes use hota ha in v6*/}
        <Route path="/" element={<User />} />
        <Route path="/places/new" element={<NewPlace />} />

        {/*Redirect ke jagha Navigate use hota ha in v6*/}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
