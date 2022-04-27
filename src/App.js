import React from "react";

import Header from "./common/components/Navbar";
import ApplicationRoutes from "./Routes";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="todo-container">
        <ApplicationRoutes />
      </div>
    </div>
  );
}

export default App;
