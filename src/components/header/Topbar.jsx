import React from 'react';
 import './topbar.css';

const Topbar=() => {
  return (
  <div className='top'>
      {/* <div className="topLeft"></div>
      <div className="topCenter">
        
      </div> */}
      <div className="topRight">
          <ul className="topList">
              <li className="topListItem">
                <span><a href="#">TRIPS</a></span>
              </li>
              <li className="topListItem">
                <span><a href="#">RECENTLY VISITED</a></span>
              </li>
              <li className="topListItem">
                <span><a href="#">BOOKINGS</a></span>
              </li>
             
          </ul>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdlRxDs_5LYLZOTl4MNYAMsCXHKhVd2sJJw&usqp=CAU" alt="" className="topAvatar"/>
      </div>
  </div>);
}

export default Topbar;
