import React from 'react';
import '../styles/Sidebar.css';

import { Avatar } from '@material-ui/core';

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1610910782309-aa9976d57526?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ibrahim-Furkan Demirbilek</h2>
        <h4>ibrahimdmrblk@outlook.de</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">248</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">32</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwaredevelopment')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
