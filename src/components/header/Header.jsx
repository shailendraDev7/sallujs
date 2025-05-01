
import logo from '../../assets/images/favicon/android-chrome-192x192.png'
import Nav from './nav/Nav'
import CredSection from '../CredSection'

const Header = () => {
  return (
    <>
      <header className='container shadow-white-lg rounded-b-3xl py-12'>
        <div className='flex flex-row justify-around items-center'>
          <div className='basis-sm px-0'>
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