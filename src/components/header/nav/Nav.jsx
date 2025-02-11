import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Nav = () => {
    return (
        <div className='nav flex flex-row'>
            <div className='flex justify-between items-center'>
                <Link>Categories</Link><KeyboardArrowDownIcon />
            </div>
            <ul className='flex px-6'>
                <li><Link>Home</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav