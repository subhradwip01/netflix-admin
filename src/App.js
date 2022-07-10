import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route , Navigate} from "react-router-dom";
import Users from "./Pages/Users/Users";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import Movies from "./Pages/Movies/Movies";
import Movie from "./Pages/Movie/Movie";
import NewMovie from "./Pages/NewMovie/NewMovie";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";
import Login from "./Pages/Login/Login";
// import ProtecedComponents from "./utils/ProtecedComponents";
import ListMenu from "./Pages/ListMenu/ListMenu";
import List from "./Pages/List/List";
import NewList from "./Pages/NewList/NewList";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const mobileSidebarHandler = () => {
    if (window.innerWidth <= 570) {
      setMobileSidebar(true);
    }
  };
  const { user } = useContext(AuthContext);

  useEffect(() => {
    mobileSidebarHandler();
  }, []);

  window.addEventListener("resize", mobileSidebarHandler);

  return (
    <div className="App">
      {user && (
          <>
            <Topbar
              mobileSidebar={mobileSidebar}
              showMobileSidebar={showMobileSidebar}
              onShow={() => setShowMobileSidebar((p) => !p)}
            />
            {mobileSidebar && (
              <MobileSidebar
                showMobileSidebar={showMobileSidebar}
                onShow={() => setShowMobileSidebar((p) => !p)}
              />
            )}
            </>
      )}

    <div className="container">
      {user && !mobileSidebar && <Sidebar />}
      <Routes>
        <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />

        {user && (
          <>
              <Route path="/" element={<Home />} />

              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="new-user" element={<NewUser />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:id" element={<Movie />} />
              <Route path="new-movie" element={<NewMovie />} />
              <Route path="lists" element={<ListMenu />} />
              <Route path="lists/:id" element={<List />} />
              <Route path="newList" element={<NewList />} />
            
          </>
        )}
      </Routes>
      </div>
    </div>
  );
}

export default App;
