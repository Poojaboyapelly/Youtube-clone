import React from 'react'
import './Sidebar.css';
import home from '../../assets/home.png';
import automobile from '../../assets/automobiles.png';
import game_icon from '../../assets/game_icon.png';
import entertainment from '../../assets/entertainment.png';
import sports from '../../assets/sports.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';


const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className='shortcut-links'>
          <div className='side-links'>
            <img src={home} alt='Home'/><p>Home</p>
          </div>
          <div className='side-links'>
            <img src={game_icon} alt=''/><p>game_icon</p>
            </div>
          <div className='side-links'>
            <img src={automobile} alt=''/><p>automobile</p>
            </div>
          <div className='side-links'>
            <img src={entertainment} alt=''/><p>entertainment</p>
            </div>
          <div className='side-links'>
            <img src={sports} alt=''/><p>sports</p>
            </div>
          <div className='side-links'>
            <img src={tech} alt=''/><p>tech</p>
            </div>
          <div className='side-links'>
            <img src={music} alt=''/><p>music</p>
            </div>
          <div className='side-links'>
            <img src={blogs} alt=''/><p>blogs</p>
            </div>
          <div className='side-links'>
            <img src={news} alt=''/><p>news</p>
            </div>
          <div className='side-links'>
           
          </div>
          <hr/>
          <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <div className='side-links'>
            <img src={jack} alt=''/><p>jack</p>
            </div>
          <div className='side-links'>
            <img src={simon} alt=''/><p>simon</p>
            </div>
          <div className='side-links'>
            <img src={megan} alt=''/><p>megan</p>
            </div>
          <div className='side-links'>
            <img src={cameron} alt=''/><p>cameron</p>
            </div>
          </div>

        </div>

      
    </div>
  )
}

export default Sidebar
