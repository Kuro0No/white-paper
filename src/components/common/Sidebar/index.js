import React, { useEffect, useRef, useState } from 'react';
import search from '../../../assets/icon/search.png';
import expandMore from '../../../assets/icon/expand-more.png';
import expandRight from '../../../assets/icon/expand-right.png';
import './index.scss';
import tab from './_variable';
// import {TreeView} from '@material-ui/core'
import menu from '../../../assets/icon/menu.png'
import UseClickOutSide from 'customHook/useClickOutside';
import { doc } from 'prettier';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('');
  const [tabExpand, setTabExpand] = useState([])
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const tabContainer = useRef(null)
  const searchRef = useRef(null)
  const handleActive = ({ e, id }) => {
    e.stopPropagation();
    setActiveTab(id);
    setTabExpand(() => {
      return !tabExpand.includes(id) ? [...tabExpand, id] : tabExpand.filter(item => item !== id)
    })
  };
  const handleSearch = () => {
    setOpenSearch(true)
  }

  const handleOpenMenu = () => {
    setOpenMenu(true)
  }
  useEffect(() => {
    const root = document.getElementById('root')

    if (document.querySelector('.open-modal')) {

      root.removeChild(document.querySelector('.open-modal'))
    }
    if (openMenu || openSearch) {

      const createdModal = root.appendChild(document.createElement('div'))
      createdModal.setAttribute('class', 'open-modal')
    }

  }, [openMenu, openSearch])
  console.log((document.querySelector('.open-modal')))
  UseClickOutSide(tabContainer, () => setOpenMenu(false))
  UseClickOutSide(searchRef, () => setOpenSearch(false))

  return (<>
    {openSearch && <div className='search-container'><div ref={searchRef} className='search-input-container'>
      <div className='search-input d-flex'>
        <img src={search} />
        <input placeholder='Search content...' />
        <div onClick={() => setOpenSearch(false)}>x</div>
      </div>
    </div>
    </div>}
    <div className="sidebar_container">

      <div className="title d-flex justify-content-between">
        <div className="left d-flex ">
          <div className={`menu-container `} onClick={() => handleOpenMenu()}>
            <img src={menu} width={18} />
          </div>
          <div className="logo">A</div>
          <div className="title-main">Axie Infinity</div>
        </div>
        <div onClick={() => handleSearch()} className="right">
          <img src={search} className='search' />
        </div>
      </div>
      <div ref={tabContainer} className={`tab-container ${openMenu ? 'open-menu' : ''}`}>

        <div className='mobile-title-tab justify-content-end'>
          <div className='p-2' onClick={() => setOpenMenu(false)}>X</div>
        </div>
        <div className={`tab-selections py-2 `}>
          <div>
            {tab.map((item, index) => {
              return (
                <div key={item.id} onClick={e => handleActive({ e, id: item.id })} className={`tab-group `}>
                  <div
                    role={`${index === 0 ? 'no-boder-top' : ''}`}
                    className={`ps-4 ${activeTab === item.id ? 'active' : ''} `}
                  >
                    <div className={`d-flex justify-content-between py-2 `}>
                      <div className={`tab-title `}>{item.name} </div>
                      {item.hasChild && <img className="expand-icon" src={tabExpand.includes(item.id) ? expandMore : expandRight} />}
                    </div>
                  </div>
                  {item.hasChild && tabExpand.includes(item.id) &&
                    item.child.map(child => {
                      return (
                        <div key={child.id} onClick={e => handleActive({ e, id: child.id })} className={`ms-4  child `}>
                          <div className={` ${activeTab === child.id ? 'active' : ''}`}>
                            <div className="d-flex justify-content-between  py-2">
                              <div className="child-name">
                                <div className="ps-4">{child.name}</div>
                              </div>
                              {child.hasChild && <img className="expand-icon" src={tabExpand.includes(child.id) ? expandMore : expandRight} />}
                            </div>
                          </div>
                          {child.hasChild && tabExpand.includes(child.id) &&
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
          <div className='powered'>
            <a
              className='d-flex align-items-center'
              href='https://www.gitbook.com/?utm_source=content&utm_medium=trademark&utm_campaign=-LocuLeNcXinpTOZxNu0&powered-by=Axie+Infinity'
            >
              <svg width={38} viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="xMidYMid meet" data-rnw-int-class="nearest___294-2332_" className="r-1rasi3h r-eu3ka r-1aockid"><path fillRule="evenodd" clip-rule="evenodd" d="M562.168 159.724l325.95 162.727c15.062 7.519 15.298 28.898.404 36.746L465.19 582.283a82.875 82.875 0 01-75.639.83L123.74 450.409c-32.376-12.972-68.568 10.748-68.568 46.474 0 28.728 16.256 54.991 41.99 67.839l266.48 133.036c16.267-16.537 38.918-26.795 63.967-26.795 24.334 0 46.404 9.68 62.558 25.394L822.075 521.45a89.893 89.893 0 01-1.385-15.755c0-49.44 40.14-89.519 89.655-89.519S1000 456.255 1000 505.695c0 49.439-40.14 89.518-89.655 89.518-24.21 0-46.178-9.581-62.31-25.153L515.94 745.065a90.036 90.036 0 011.324 15.417c0 49.439-40.14 89.518-89.655 89.518s-89.655-40.079-89.655-89.518c0-4.572.343-9.063 1.006-13.451L68.622 612.068C26.566 591.072 0 548.153 0 501.205v-26.15c0-35.755 19.82-68.574 51.49-85.261l435.039-229.24a82.87 82.87 0 0175.639-.83zM427.609 794.912c19.044 0 34.483-15.415 34.483-34.43 0-19.016-15.439-34.431-34.483-34.431-19.044 0-34.482 15.415-34.482 34.431 0 19.015 15.438 34.43 34.482 34.43zm517.219-289.217c0 19.015-15.438 34.43-34.483 34.43-19.044 0-34.482-15.415-34.482-34.43s15.438-34.43 34.482-34.43c19.045 0 34.483 15.415 34.483 34.43z" fill="currentColor"></path></svg>
              <div className='pl-2'>
                Powered By&nbsp;<label className='bold m-0'>Gitbook</label>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Sidebar;
