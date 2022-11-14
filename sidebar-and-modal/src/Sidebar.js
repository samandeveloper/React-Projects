//ll the content of the sidebar
import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context';

const Sidebar = () => {
  const {isSiderOpen,closeSidebar} = useGlobalContext() || {};  //object not array

  return(
    <aside className={`${isSiderOpen ? 'sidebar show-sidebar': 'sidebar'}`}>
  
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict'/>
        <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
      </div>

      <ul className='links'>
        {links.map((link)=>{
          return(<li key={link.id}><a href={link.url}>{link.icon}{link.text}</a></li>)
        })}
      </ul>

      <ul className='social-icons'>
        {social.map((icon)=>{
          return(<li key={icon.id}><a href={icon.url}>{icon.icon}{icon.text}</a></li>)
        })}
      </ul>

    </aside>
  )
}

export default Sidebar
