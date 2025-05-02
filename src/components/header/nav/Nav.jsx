import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Nav = () => {
    return (
        <div className='nav flex flex-row'>
            <div className='flex justify-justify-content-evenly items-center'>
                <Link>Categories <KeyboardArrowDownIcon /></Link>
            </div>
            <ul className='flex justify-evenly items-center'>
                <li><Link>Home</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav