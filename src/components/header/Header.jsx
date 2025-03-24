import React from 'react'
import logo from '../../assets/images/favicon/android-chrome-192x192.png'
import Nav from './nav/Nav'
import ToggleMode from '../togglemode/ToggleMode'
import CredSection from '../CredSection'

const Header = () => {
  return (
    <>
      <header className='container bg-gray-850 shadow-white-lg rounded-b-3xl py-5'>
        <div className='flex flex-row justify-between items-center px-4'>
          <div className='basis-sm'>
            <img src={logo} />
          </div>

          {/* Nav */}
          <div className='basis-sm'>
            <Nav />
          </div>

          <div className='basis-sm'>
            <CredSection />
          </div>

          {/* <div className='basis-xs'>
            <ToggleMode />
          </div> */}
        </div>
      </header>
    </>
  )
}

export default Header