import React from 'react'
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const CredSection = () => {
  return (
    <div className='cred text-white'>
      <Link>Login</Link>
      <Link>SignUp</Link>
    </div>
  )
}

export default CredSection
