import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const accessToken = hash.access_token;

    if (accessToken) {
      setToken(accessToken);
    }

    console.log("The hash >> ", hash);
  }, []);
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
