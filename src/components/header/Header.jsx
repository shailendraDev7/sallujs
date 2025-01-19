import React from 'react'
import logo from '../../assets/images/favicon/android-chrome-192x192.png'
import Nav from './nav/Nav'
import ToggleMode from '../togglemode/ToggleMode'
import CredSection from '../CredSection'

const Header = () => {
  return (
    <>
      <header className=''>
        <div className='container mx-auto p-4'>
          <div className='flex justify-between align-items-center'>
            <div className='flex-1'>
              <img src={logo} />
            </div>
            
            {/* Nav */}
            <div className='flex-1 p-4 m-2'>
              <Nav />
            </div>

            <div className='flex-1 p-4 m-2'>
              <CredSection/>
            </div>

            <div className='flex-1 p-4 m-2'>
              <ToggleMode/>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header