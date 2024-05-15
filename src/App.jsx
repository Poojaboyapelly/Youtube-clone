import React ,{useState}from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

const App = () => {
  const [sidebar,setSidebar] =useState(true);
  return (
    <div>
      <Navbar setSidebar={sidebar}/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/video/:categoryId/:videoId' element={<Video/>}/>
        
      </Routes>
    </div>
  )
}

export default App
