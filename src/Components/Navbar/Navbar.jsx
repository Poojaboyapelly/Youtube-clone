import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png';
import logo_icon from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import notification_icon from '../../assets/notification.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png'
import profile from '../../assets/user_profile.jpg';


const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
    <div className='nav-left flex-div'>
    <img className='menu' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt='menu_icon'/>   
    <img className='logo' src={logo_icon} alt='logo_icon'/>    
    </div>
    <div className='nav-middle flex-div'>
      <div className='search-box flex-div'>
      <input type="text" placeholder='search'></input>
      <img className='search' src={search_icon} alt='search_icon'/>  
      </div>  
    </div>

    <div className='nav-right flex-div'>
    <img className='more' src={more_icon} alt='more'/>   
    <img className='notifications' src={notification_icon} alt='notification_icon'/>  
    <img className='upload' src={upload_icon} alt='upload_icon'/>   
    <img className='profile' src={profile} alt='profile_icon'/>   
    </div>
    
    </nav>
  )
}

export default Navbar;
