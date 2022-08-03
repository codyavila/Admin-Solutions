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
          <div className='items'>
            <div className='item'>
              <NotificationsIcon />
            </div>
            <div className='item'>
              <ChatIcon />
            </div>
            <div className='item'>
              <FormatListBulletedIcon />
            </div>
            <div className='item'>
              <DarkModeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
