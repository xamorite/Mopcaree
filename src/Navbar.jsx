import Mop from './assets/Logo.svg';
import setting from './assets/setting.png';
import notification from './assets/notification.png';
import profile from './assets/profile.png';
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-between font-semibold p-3 md:h-[10vh] ">
      
      <div className="w-[70vw]"><ul className="flex justify-between my-auto mx-[5vw]">
    <li><img src={Mop} alt="" /></li>

      <li>
        
      <NavLink to='/'> Home</NavLink> 
        
        </li>
    
    
    
    
      <li>
        
      <NavLink to='/about'> About Us</NavLink> 
        
        </li>
      <li>

     <NavLink to='/service'>  Services</NavLink> 
        
        </li>
      <li>Courses</li>
      <li>
        <NavLink to='/contact'>
        Contact Us
        </NavLink>
        </li>
      <li>Donate</li>
      </ul></div>
      <div className="flex justify-between md:w-[10vw]">
        <img src={setting} alt="" />
        <img src={notification} className='w-[2vw] aspect-[1]' alt="" />
        <img src={profile} alt="" />

      </div>
    </div>
  )
}

export default Navbar
