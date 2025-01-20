import React from 'react'
import { FaBars } from 'react-icons/fa'   //hamburger icon
import { AppContext, useGlobalContext } from './context';

//hamburger icon and show modal button since at first we just see hamburger icon and show modal button
const Home = () => {
  const data = useGlobalContext(AppContext)
  console.log(data)
  const {openSidebar,openModal} = useGlobalContext() || {};
  return(
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}><FaBars /></button>
      <button className='btn' onClick={openModal}>show modal</button>
    </main>
  )
}

export default Home
