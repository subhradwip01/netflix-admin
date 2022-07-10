import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./context/authContext/AuthContext";
import MovieContextProvider from "./context/movieContext/MovieContetxt";
import { ListContextProvider } from "./context/ListContext/ListContext";
import UserContextProvider from "./context/userConetxt/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <ListContextProvider>
        <UserContextProvider>
          <Router>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Router>
        </UserContextProvider>
      </ListContextProvider>
    </MovieContextProvider>
  </AuthContextProvider>
);
