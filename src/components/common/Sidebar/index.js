import React, { useState } from 'react';
import search from '../../../assets/icon/search.png';
import expandMore from '../../../assets/icon/expand-more.png';
import expandRight from '../../../assets/icon/expand-right.png';
import './index.scss';
import tab from './_variable';
// import {TreeView} from '@material-ui/core'

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('');
  const handleActive = ({ e, id }) => {
    e.stopPropagation();
    setActiveTab(id);
  };

  return (
    <div className="sidebar_container">
      <div className="title d-flex justify-content-between">
        <div className="left d-flex ">
          <div className="logo">A</div>
          <div className="title-main">Axie Infinity</div>
        </div>
        <div className="right">
          <img src={search} />
        </div>
      </div>
      <div className="tab-container py-2">
        {tab.map((item, index) => {
          return (
            <div key={item.id} onClick={e => handleActive({ e, id: item.id })} className={`tab-group `}>
              <div
                role={`${index === 0 ? 'no-boder-top' : ''}`}
                className={`ps-4 ${activeTab === item.id ? 'active' : ''} `}
              >
                <div className={`d-flex justify-content-between py-2 `}>
                  <div className={`tab-title `}>{item.name} </div>
                  {item.hasChild && <img className="expand-icon" src={expandMore} />}
                </div>
              </div>
              {item.hasChild &&
                item.child.map(child => {
                  return (
                    <div key={child.id} onClick={e => handleActive({ e, id: child.id })} className={`ms-4  child `}>
                      <div className={` ${activeTab === child.id ? 'active' : ''}`}>
                        <div className="d-flex justify-content-between  py-2">
                          <div className="child-name">
                            <div className="ps-4">{child.name}</div>
                          </div>
                          {child.hasChild && <img className="expand-icon" src={expandMore} />}
                        </div>
                      </div>
                      {child.hasChild &&
                        child.child.map(subChild => {
                          return (
                            <div
                              onClick={e => handleActive({ e, id: subChild.id })}
                              className={`ps-4 ms-4 child py-2 child-name ${activeTab === subChild.id ? 'active' : ''}`}
                            >
                              {subChild.name}
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
