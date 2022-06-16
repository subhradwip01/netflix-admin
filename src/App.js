import React,{useState,useEffect} from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import "./App.css"
import Home from './Pages/Home/Home';
import {Routes,Route} from "react-router-dom"
import Users from './Pages/Users/Users';
import User from './Pages/User/User';
import NewUser from './Pages/NewUser/NewUser';
import Movies from './Pages/Movies/Movies';
import Movie from './Pages/Movie/Movie';
import NewMovie from './Pages/NewMovie/NewMovie';
import MobileSidebar from './components/MobileSidebar/MobileSidebar';
function App() {
  const [mobileSidebar,setMobileSidebar]=useState(false);
  const [showMobileSidebar,setShowMobileSidebar]=useState(false);
  const mobileSidebarHandler=()=>{
    console.log(window.innerWidth)
    console.log(mobileSidebar)
    if(window.innerWidth<=570){
      setMobileSidebar(true)
    }
  }
  useEffect(()=>{
    mobileSidebarHandler();
  },[])


  window.addEventListener("resize",mobileSidebarHandler)

  return (
    <div className="App">
      <Topbar mobileSidebar={mobileSidebar} showMobileSidebar={showMobileSidebar} onShow={()=>setShowMobileSidebar(p=>!p)}/>
      {mobileSidebar && <MobileSidebar showMobileSidebar={showMobileSidebar} onShow={()=>setShowMobileSidebar(p=>!p)}/>}
      <div className='container'>
        {!mobileSidebar && <Sidebar/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path="users/:id" element={<User/>}/>
          <Route path="new-user" element={<NewUser/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:id" element={<Movie/>} />
          <Route path="new-movie" element={<NewMovie/>} />
        </Routes>
        

      </div>
    </div>
  );
}

export default App;
