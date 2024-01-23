import Two from './two.png';
import Im from './image1.png';
import Image2 from './image2.png';
import Image3 from './image3.png';
import Image4 from './image4.png';
import Ellipse1 from './Ellipse1.png';
import Ellipse2 from './Ellipse2.png';
import Ellipse3 from './Ellipse3.png';
import Ellipse4 from './Ellipse4.png';
import Ellipse5 from './Ellipse5.png';
import Ellipse6 from './Ellipse6.png';

function Home() {
  return (
    <div>
      <div  className={`md:self-center bg-slate-400 w-full h-[100vh] bg-bgi text-center`}>
    <div className='md:w-[70vw] md:pt-[40vh] mx-auto'>
    <h1 className='text-[5vw] self-center text-white  font-bold '>
      Welcome to Mopcare
    </h1>
    <p className='text-white text-[1.7vw]'>
    We engage and motivatethe younger generation towards paying more attention to seniors psychological and emotional needs, in addition to their physical needs.
    </p>
    <button className='m-2 py-3 px-5 bg-white rounded-[1.5vh] text-[1.5vw] text-[#344054]'>Learn More</button><button className='m-2 py-3 px-5 bg-[#3379C1] rounded-[1.5vh] text-[1.5vw] text-white'>Services</button>
    </div>
   </div>

   <div className='md:my-[20vh] flex justify-between md:h-[80vh] w-[82.5vw] mx-auto'>
       <div className='  md:w-[560px]'>
        <p className='text-[#3379C1] text-[1vw] font-medium'>We’ve helped hundreds of elderly people</p>
        <ul>
          <li className='mb-[4vh]'>
            <h2 className='font-semibold text-[3vw]'>
            We’re only just getting started on our journey
            </h2>
          </li>
          <li className='mb-[4vh] flex justify-between w-[75%]'>
            <div>
              <h1 className='text-[5vw] font-medium text-[#3379C1]'>21</h1><br />
              <p className='text-[1.5vw] font-semibold text-[#101828]'>Programs held</p>
            </div>
            <div>
              <h1 className='text-[5vw] font-medium text-[#3379C1]'>1,651</h1><br />
              <p className='text-[1.5vw] font-semibold text-[#101828]'>Attendance so far</p>
            </div>
          </li>
          <li className='mb-[4vh] flex justify-between w-[75%]'>
            <div>
              <h1 className='text-[5vw] font-medium text-[#3379C1]'>10k</h1><br />
              <p className='text-[1.5vw] font-semibold text-[#101828]'>Consultations</p>
            </div>
            <div>
              <h1 className='text-[5vw] font-medium text-[#3379C1]'>200+</h1><br />
              <p className='text-[1.5vw] font-semibold text-[#101828]'>Relief packages sent</p>
            </div>
          </li>
        </ul>
       </div>



       <div>
        <img src={Two} alt="two" /> 
        </div>
         

   </div>
   <div className='md:my-[20vh] flex justify-between md:h-[80vh] w-[82.5vw] mx-auto'>
             <div className='md:w-[560px]'>
             <ul>
              <li  className='mb-[5vh]'>
                <h2 className='font-bold text-[3vw]'>Our Vision</h2>
               <p className='text-[1.5vw] mt-[5vh] text-[#666666]'>See our senior savor their old age</p> 
                </li>

                <li className='my-[5vh]' >
                <h2 className='font-bold text-[3vw]'>Our Mission</h2>
               <p className='text-[1.5vw] mt-[5vh] text-[#666666]'>Enabling our seniors live with dignity and choice</p> 
                </li>
                <li  className='mt-[5vh]'>
                <h2 className='font-bold text-[3vw]'>Long Term Strategy</h2>
               <p className='text-[1.3vw] mt-[5vh] text-[#666666] w-[435px]'>We engage the younger generation to achieve a paradigm shift from merely looking after our seniors to catering to their NEEDS (physical, psychological and emotional).</p> 
               <p className='text-[1.4vw] mt-[5vh] text-[#666666] w-[435px]'>MopCare empowers seniors to savor their old age; live with dignity and choice while engaging the younger generation to imbibe the proper perspective of catering to the needs our seniors rather than merely looking after them to keep them alive.</p> 
                </li>
             </ul>
             </div>
             <div>
              <div className='flex' ><img className='md:w-[250px] m-[10px]' src={Im} alt="" /><img className='md:w-[270px] m-[10px] md:h-[270px] mt-auto' src={Image2} alt="" /></div>
              <div className='flex'><img className='md:w-[164px] m-[10px] md:h-[285px]' src={Image3} alt="" /><img className='md:w-[356px] m-[10px]' src={Image4} alt="" /></div>
             {/* <img src={two} alt="two" /> */}
             </div>
         </div>
         <div className='text-center py-[20vh]'>
           <h3 className='font-bold text-[2.3vw]'>
            Senior Care Initiative
           </h3>
           <p className='md:text-[20px]'>To see our seniors savor their old age.</p>
           <button className='text-white bg-[#3379C1] mt-[3vh] rounded-[8px] py-[12px] px-[20px]'> Support a Senior</button>
         </div>

         <div className='w-[90vw] bg-[#3379C1] md:h-[420px] mx-auto rounded-[2vw] flex justify-between p-[3%]'>
          <div className='w-[15vw] md:h-[420px] relative  flex-col justify-between '>
          <img src={Ellipse1} alt="" className=' absolute left-0 rounded-full ms-0 ' />
          <img src={Ellipse2} alt="" className=' absolute right-0 bottom-[35vh] rounded-full ms-auto ' />
          <img src={Ellipse3} alt="" className=' absolute left-0 bottom-[10vh] rounded-full  ms-0' />
          </div>
          <div className='text-center'>
            <h1 className='text-[3vw] font-bold text-white'>
              Subscribe To Get Updates for <br />
                Every New Courses
            </h1>
            <p className='text-[#ffffff] opacity-[70%] md:my-[6vh]'>20k+ students daily learn with Eduvi. Subscribe for new courses.</p>
            <input placeholder='enter your email' type="email" className=' placeholder:text-white bg-[#ffffff] bg-opacity-[20%] me-0 px-[4vw] py-[3vh] rounded-l-[1vw]' /> <button className='text-white bg-[#73B834] ms-0 px-[4vw] py-[3vh] rounded-r-[1vw]'>Subscribe</button>
          </div>
          <div className='w-[20vw] relative md:h-[420px]'> 
            <img src={Ellipse4} className='rounded-full absolute right-0' alt="" />
            <img src={Ellipse5} className='rounded-full absolute bottom-[35vh] ' alt="" />
            <img src={Ellipse6} className='rounded-full absolute right-0 bottom-[10vh]' alt="" />
            
          </div>
         </div>
    </div>
  )
}

export default Home
