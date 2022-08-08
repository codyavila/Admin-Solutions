import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className="editButton">Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src='' alt='' className='itemImg' />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 (555) 555-5555</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">9903 Someone's Address Ln.</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'></div>
        </div>
        <div className='bottom'></div>
      </div>
    </div>
  )
}

export default Single
