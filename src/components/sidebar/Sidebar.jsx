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

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>adminDash</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonIcon className='icon' />
            <span>Users</span>
          </li>
          <p className='title'>INVENTORY</p>
          <li>
            <InventoryIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartCheckoutIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Deliveries</span>
          </li>
          <p className='title'>MANAGEMENT</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon' />
            <span>Notifications</span>
          </li>
          <li>
            <FolderIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <ManageAccountsIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
