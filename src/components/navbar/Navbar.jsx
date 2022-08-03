import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant'
import ChatIcon from '@mui/icons-material/Chat'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <NotificationsIcon className='icon' />
            <div className='counter'>11</div>
          </div>
          <div className='item'>
            <ChatIcon className='icon' />
            <div className='counter'>4</div>
          </div>
          <div className='item'>
            <FormatListBulletedIcon className='icon' />
          </div>
          <div className='item'>
            <DarkModeIcon className='icon' />
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/12871449/pexels-photo-12871449.jpeg'
              alt='profile'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
