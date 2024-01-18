import Mop from './assets/Logo.svg';

function Footer() {
  return (
    <div className="p-[7%]">
      <div>
        <ul className="flex justify-between md:text-[16px] text-[#667085] leading-6">
            <li><ul className="leading-6"><li className='text-[#98A2B3] md:text-[14px]'>Products</li>
                   <li>MOPCARE DIRECT INTERVENTIONS</li>
                   <li>M.E.S MOPCARE-EDU-SERIES</li>
                   <li>M.M.C MOPCARE MEDIA CONSULT</li>
                   <li>M.S.A. MOPCARE-SENIORS ASSIST</li>
                   <li>M.S.S MOPCARE SENIOR Health SPECIALTIES</li>
                   <li>M+. MOPCARE PLUS</li>
                   <li>M.S.F. MOPCARE-SENIORS’ FITNESS CLUB</li>
                   <li>M.D.S MOPCARE DISCOUNT STORES</li>
                   <li>M.S.H. MOPCARE SENIORS’ HOME</li></ul></li>
            <li><ul>
                   <li className='text-[#98A2B3] md:text-[14px]'>Company</li>
                   <li>About us</li>
                   <li>Services</li>
                   <li>Contact Us</li>
                   <li>Donate</li></ul></li>
            <li><ul>
                   <li className='text-[#98A2B3] md:text-[14px]'>Resources</li>
                   <li>Blog</li>
                   <li>Media</li>
                   <li>Events</li>
                   <li>Podcasts</li>
                </ul></li>
            <li><ul>
                   <li className='text-[#98A2B3] md:text-[14px]'>Social</li>
                   <li>Twitter</li>
                   <li>LinkedIn</li>
                   <li>Faceook</li>
                   <li>Youtube</li>
                   <li>Instagram</li></ul></li>
        </ul>
      </div>
      <div className="flex justify-between mt-[10vh]">
        <div><img src={Mop} alt="" /></div>
        <div className='text-[#98A2B3] text-base'>© 2022 Untitled UI. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer
