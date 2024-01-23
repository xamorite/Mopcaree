import Two from './two.png';
import Gb from './Gb.png';

function About() {
  return (
    <div >
      <div className="text-center">
        <header className="text-[#3379C1] font-bold text-[1.5vw]">About us</header><br />
        <h1 className="  font-bold text-[3vw]">About Mopcare</h1>
        <p className="text-[#667085] text-[1.5vw]">Learn more about what we are doing and the vision behind the organization.</p>
      </div>
      <div className='md:my-[20vh] flex flex-row-reverse justify-between md:h-[80vh] w-[82.5vw] mx-auto gap-x-[7vw]'>
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


     <div className='flex justify-between mx-auto md:w-[80vw]'>
        <div><img src={Gb} alt="" /></div>
        <div className='md:w-[560px] text-[#667085] text-[1.4vw]'>
            <h2 className='font-bold text-[3vw] text-start text-black'>Senior Leadership</h2>
            <p>
            Gbolahan Fabiyi is the SENIOR-CARE Strategist and Lead Facilitator at the Mopcare Initiative for Seniors. His drive is to design and execute interventions geared towards addressing social isolation and loneliness amongst the elderly population
            </p><br />
            <p>
            He is a “weekly- Elder-care” Radio Host focused on successful aging and a facilitator and trainer for both individual groups, conferences and seminars, on subjects that border on holistic health for all and quality of life of the elderly.
            </p><br />
            <p>
            He is the convener of the monthly Seniors – Connect program tagged “B’ojo t’in dale” in Abeokuta, that caters for the health and relational needs of Senior Citizens, along with a committed team of volunteers. He is a facilitator with different Elders fora that caters for Seniors in Abeokuta, Ibadan, Oyo towns  and Lagos. He was also a volunteer Lecturer at the department of Clinical Pharmacy, Olabisi Onabanjo University.
            </p>
        </div>
        
     </div>
     <div className='md:w-[80vw] mx-auto text-[#667085] text-[1.4vw] '> 
          <p>
          An active participant in the rehabilitation of victims of drugs and substance abuse through the Positive Youth and Family Life NGO (2018 till date).
          </p><br />
          <p>
          He is a Merit Award Winner and member of the Pharmaceutical Society of Nigeria, Ogun State branch, and a member of the Ogun State Drug Control Committee. He is the coordinator, Association of Community Pharmacists, Abeokuta Zone, and the immediate past Chairman, Planning Committee for a statewide campaign on Substance/medicine abuse in Ogun State (2019).
          </p><br />
          <p>
          Gbolahan Akanji Fabiyi is a Consultant Pharmacist with Public Health expertise and a fellow of the West African Post Graduate College of Pharmacists; an Associate, Institute of Strategic Management and a member of the Nigerian Institute of Public Relations.
          </p><br />
          <p>
          He is the Chief Executive Officer, Mopsophia Pharmaceuticals Ltd. and happily married with two children.
          </p>
        </div>

        <div className='flex justify-between mx-auto md:w-[80vw] md:mt-[8vh] h-[15vh]'>
         <div>
            <h3 className='font-bold text-[1.5vw]'>Join our newsletter</h3>
            <br />
            <p className='text-[#667085]'>
                Stay in touch with us to get latest news and special offers
            </p>
         </div>
         <div>
            <input type="text" placeholder='Enter your email' className=' border-2 p-3 w-[20vw] border-[#667085] rounded-md'/>
             <button className='rounded-md bg-[#3379C1] text-white md:w-[8vw] p-3 mx-[2vw]'>
                Subscribe
            </button>
         </div>
        </div>

    </div>
  )
}

export default About
