import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import InventoryIcon from '@mui/icons-material/Inventory'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import FolderIcon from '@mui/icons-material/Folder'
import SettingsIcon from '@mui/icons-material/Settings'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>adminDash</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <p className='title'>INVENTORY</p>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <InventoryIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <ShoppingCartCheckoutIcon className='icon' />
              <span>Orders</span>
            </li>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <LocalShippingIcon className='icon' />
              <span>Deliveries</span>
            </li>
          </Link>
          <p className='title'>MANAGEMENT</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <QueryStatsIcon className='icon' />
              <span>Stats</span>
            </li>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <NotificationsActiveIcon className='icon' />
              <span>Notifications</span>
            </li>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <FolderIcon className='icon' />
              <span>Logs</span>
            </li>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <SettingsIcon className='icon' />
              <span>Settings</span>
            </li>
          </Link>
          <p className='title'>USER</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <ManageAccountsIcon className='icon' />
              <span>Profile</span>
            </li>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <LogoutIcon className='icon' />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  )
}

export default Sidebar
