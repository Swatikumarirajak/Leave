import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="container mt-4">
      <div className="text-center bg-primary text-white p-3 rounded">
        <h2>Employee Leave Management System</h2>
      </div>

      <div className="mt-4">
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Dashboard user={user} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default App;
