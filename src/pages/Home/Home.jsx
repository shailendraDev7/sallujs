import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className='container mx-auto flex flex-col h-full  items-center'>
        <div className='flex py-2'>
          <h1 className='text-7xl font-cursive leading-normal tracking-wider flex '>All your Javascript <br />Projects here.</h1>
        </div>

        {/* Search Button */}
        <div className='flex p-4 my-10 border border-yellow-600 rounded-full'>
          <input className='bg-transparent text-yellow-200 text-xl hover:border-yellow-400 mx-4 focus:outline-none' placeholder='Search the project...' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" className="size-8 stroke-yellow-400 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        <div className='flex w-full justify-evenly py-10 text-white'>
          <Button>Projects<KeyboardArrowDownIcon/></Button>
          <Button>Programs<KeyboardArrowDownIcon/></Button>
          <Button>Concepts<KeyboardArrowDownIcon/></Button>
          <Button>Tutorials<KeyboardArrowDownIcon/></Button>
          <Button>Demos<KeyboardArrowDownIcon/></Button>
        </div>
      </div>
    </>
  )
}

export default Home
