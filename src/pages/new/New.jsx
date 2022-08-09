import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add User</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              alt=''
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label>Username</label>
                <input type='text' placeholder='Enter Username' />
              </div>
              <div className='formInput'>
                <label>First & Last name</label>
                <input type='text' placeholder='Enter Name' />
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type='text' placeholder='Enter Email' />
              </div>
              <div className='formInput'>
                <label>Phone</label>
                <input type='text' placeholder='(555) 555-5555' />
              </div>
              <div className='formInput'>
                <label>Password</label>
                <input type='text' placeholder='Enter Password' />
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input type='text' placeholder='Enter Address' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
