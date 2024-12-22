import React,{useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link,useNavigate, useLocation, NavLink } from 'react-router-dom'

const Navbar = () => {
   const navigate = useNavigate()
   const location = useLocation()
   const [Home, sethome] = useState(false)
   
    const [nav, setnav] = useState("false")
    const handlenav = () =>{
        setnav(!nav)
    }
    const contactus = () =>{
      navigate('/contact')
    }
    const handleScrollToService = (event) => {
      event.preventDefault();
      const serviceSection = document.getElementById('service');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div>
        <div className='w-full backdrop:blur-[4px]' >
           <div className='max-w-[1242px] flex justify-between items-center mx-auto h-24 px-4'>
             <h1 className='text-[#fff] font-bold text-3xl font-archivo'><Link to='/'></Link></h1>
             <ul className=' md:flex hidden'>
                <NavLink to='/' className={({ isActive }) => isActive ? "p-4 text-[#ffff] font-archivo" : 'p-4 text-[#989898] font-archivo' }>Home</NavLink>
                <NavLink to='#skills'   className={({ isActive }) => isActive ? "p-4 text-[#ffff] font-archivo" : 'p-4 text-[#989898] font-archivo' }>Skills</NavLink>
                <NavLink to='/port' className={({ isActive }) => isActive ? "p-4 text-[#ffff] font-archivo" : 'p-4 text-[#989898] font-archivo' }>Portfolio</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? "p-4 text-[#ffff] font-archivo" : 'p-4 text-[#989898] font-archivo' }>About</NavLink>
                <NavLink to='/blog' className={({ isActive }) => isActive ? "p-4 text-[#ffff] font-archivo" : 'p-4 text-[#989898] font-archivo' }>Blog</NavLink>
             </ul>
             
             <div className='block md:hidden' onClick={handlenav}>
                {nav == false ? <AiOutlineClose color='white' size={20}/> :  <AiOutlineMenu color='white' size={20}/>}
             </div>
             <div className={nav == false ? 'h-full fixed left-0 top-0 w-[70%] bg-[#212121] z-30 px-5 py-5 ease-in-out duration-500 ' : "fixed left-[-100%]"}>
             <h1 className='text-[#fff] w-full font-bold text-3xl '>goodmanny</h1>
             <ul className='pt-24'>
                <Link to="/" className=' block p-4 text-[#989898] font-archivo'>HOME</Link>
                <Link to="" className=' block p-4 text-[#989898] font-archivo'>SERVICE</Link>
                <Link to='/port' className=' block p-4 text-[#989898] font-archivo'>PORTFOLIO</Link>
                <Link to="/about" className=' block p-4 text-[#989898] font-archivo'>ABOUT</Link>
                <Link to='/blog' className=' block p-4 text-[#989898] font-archivo'>BLOG</Link>
             </ul>
             </div>  
           </div>
        </div>
    </div>
  )
}

export default Navbar