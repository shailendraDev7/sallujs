import React from 'react'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Nav = () => {
    return (
            <div className='container mx-auto'>
                <div className='flex'>
                    <div>
                        <Link>Categories</Link>
                    </div>
                    <div className='w-full'>
                        <ul className='flex'>
                            <li><Link>Home</Link></li>
                            <li><Link>Projects</Link></li>
                            <li><Link>Services</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Nav