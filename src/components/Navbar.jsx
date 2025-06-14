import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center' onClick={()=>{
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <div className='w-10 h-10'>
              <img src={logo} alt="logo" className='w-12 h-12' />
          </div>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Piyush Bidaliya</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link)=>(
            <li key={Link.id}
            className={`${active === Link.title ? "text-white": "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=> setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        {/* mobile */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={()=> setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col gap-4 justify-end items-start'>
            {navLinks.map((Link)=>(
              <li key={Link.id}
              className={`${active === Link.title ? "text-white": "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={()=> {
                setToggle(!toggle)
                setActive(Link.title)
              }}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar