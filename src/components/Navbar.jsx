import Mop from './Logo.svg';
// import setting from './setting.png';
// import notification from './notification.png';
// import profile from './profile.png';
import {Link,} from 'react-router-dom'
import { useState } from 'react';
import Home from './home/Home';

function Navbar() {


  let Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "./Service" },
    { name: "About", link: "./About" },
    { name: "Contact", link: "./Contact" },
    {name: "Courses", link: "./Courses" },
    // { name: "Contact", link: "./Contact" },
  ];



  let [open, setOpen] = useState(false)

  return (
    <div className='w-full justify-between flex px-5 lg:px-10 py-2  backdrop-blur-md bg-[#000000] bg-opacity-[3%] top-0 z-30 sticky'>
      <Link to={Home}><img src={Mop} alt="" /></Link>
       <div className='flex justify-between'>
       <div onClick={() => setOpen(!open)} className='flex items-center text-3xl  cursor-pointer md:hidden'>

<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
</div>

      
        <ul className={` md:flex md:items-center md:pb-0 pd-12 absolute md:static bg-white md:bg-[#000000] md:bg-opacity-0 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 px-6 transition-all duration-[0.3s] ease-in ${open ? 'top-11 pb-5' : 'top-[-490px]'}`}>
          

        {
              Links.map((link) =>

                <li key={Links.link} className=' md:ml-8 text-xl text-black md:my-0 my-7'>
                  <a href={link.link} className='text-black' >{link.name}</a>
                </li>
              )
            }
            <li className='w-full'>
              <button className=' bg-[#3379C1] rounded-md p-3 w-full text-white font-semibold md:ms-[2vw]'>My Account</button>
            </li>

              
    
           </ul>
          
      
       </div>
    </div>
  )
}

export default Navbar
