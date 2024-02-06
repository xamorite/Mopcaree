import first from './ser1.png';
import second from './ser2.png';
import third from './ser3.png';
import fourth from './ser4.png';
import fifth from './ser5.png';
import sixth from './ser6.png';

export default function Service() {
  return (
    <div className="mx-auto w-[80vw] mt-[10vh] text-center">
      <div>
        <header className="text-[#3379C1] font-bold text-[4vw] md:text-[1.5vw]">Services</header><br />
        <h3 className="  font-bold md:text-[4vw] text-[6vw]">MOPCARE DIRECT INTERVENTIONS</h3>
      </div>


      <div className="mt-[10vh]">
        <h1 className="font-semibold md:text-[3vw] mb-[5vh]  text-[6vw]">MOPCARE SENIORS CONNECT</h1>
        <p className="md:text-[1.5vw] md:text-center text-[#667085] text-start">A monthly gathering of seniors where they receive free basic medical checks, nutritional and psychological counselling, pharmaceutical care, food supplements, antioxidants and commodities of daily living etc</p>
      </div>
       

      <div className="flex justify-between mt-[5vh] ">
        <img className='w-[35vw] ' src={first} alt="" />
        <img className='w-[40vw] ' src={second} alt="" />
      </div>
      
      <div className='my-[5vh] md:text-[1.5vw]  text-[#667085] text-start'>
        <p className='text-start'>
        
          This intervention is directed towards communities and it is sustained by the pool of volunteers in that community so as to ensure community ownership and sustainability
        </p><br />
        <p>
          We have held four monthly episodes in Abeokuta and a new chapter will soon begin in Lagos and it is expected to be replicated globally, as we plan to involve CDAs (Community Development Associations) in a way to encouraging them to take up such local initiatives for their seniors.
        </p><br />
        <p>
          The successes of our interventions have become a foundation and an actionable blueprint for subsequent results with certainty, auto- reproducibility and predictable quality in service delivery.
        </p>
        
      </div>
      <button className='text-white bg-[#3379C1] px-5 py-2 mt-[5vh] mx-auto rounded-sm'>Donate</button>

      <div className='mt-[10vh]'>
         <h3 className='font-semibold md:text-[3vw] mb-[5vh]  text-[6vw]' >
         MOPCARE VOLUNTEER PARTNERSHIP (MVP)
         </h3>
         <p className="md:text-[1.5vw] md:text-center text-[#667085] text-start">
         This is a community of helps and helpers that caters for the public health needs of our seniors and their immediate communities through a syndicated network of volunteers.
         </p>
      </div>
      
       <div className='mt-[10vh] flex justify-between'>
        <img src={third} className='w-[35vw]' alt="" />
        <img src={fourth} className='w-[40vw]' alt="" />
       </div>
       
       <div className='my-[5vh] md:text-[1.5vw]  text-[#667085] text-start'>
          <p>We believe that the health of our seniors is as important as health of their immediate communities. This is centered around sharing the love of God with our seniors via our time, skills and resources. We emphasize the skill of listening as the first step towards proffering acceptable solutions to senior challenges</p><br />
          <p>
          We define success in our interventions as;
          </p>
          <p>Inclusiveness</p><br />
          <p>Local adaptability</p><br />
          <p>cultural sensitivity</p><br />
          <p>Sustainability &</p><br />
          <p>Seamless succession plan</p> <br />
          <h3 className='font-semibold md:text-[2vw] mb-[5vh]  text-[6vw] text-[black]'>MOPCARE RETIRED SENIORS VOLUNTEER PARTNERSHIP (M-RSVP)</h3><br />
          <p>
          This is a subsidiary of Mopcare volunteer partnership (above).This is a more specific arm of volunteers for retirees from both public and private sectors
          </p><br />
          <p>
          It helps for group-training and jobs/senior- internship selection processes
          </p>

         
       </div>
       <button className='text-white bg-[#3379C1] px-5 py-2 mt-[5vh] mx-auto rounded-sm'>Volunteer</button>


       <div className='mx-auto my-[10vh] md:text-[1.5vw]  text-[#667085]'>
       <h3 className='font-semibold md:text-[3vw] mb-[5vh]  text-[6vw] text-[black]'>
        MOPCARE-EDU-SERIES
       </h3>
       <p>
       We create awareness on senior care and we organize and facilitate for senior programs that are directed to improving their positive health behaviors.
       </p>
       <div className='mt-[10vh] flex justify-between'>
        <img src={fifth} className='w-[35vw]' alt="" />
        <img src={sixth} className='w-[40vw]' alt="" />
       </div><br />
      <p className='text-start'>
      We also direct our educational interventions towards their Adult children and the younger generation so as to improve and appropriately redirect their care for their seniors.
      </p><br />
      <p className='text-start'>
      We achieve this through our campaigns through social media, text messages, and physical meetings.
      </p><br />
      <p className='text-start'>
      Our training on senior care also extends to other professionals .
      </p><br />
     <h3 className='font-semibold md:text-[2vw] text-start my-[5vh]  text-[6vw] text-[black]'>
     MOPCARE PRE-RETIREMENT TRAINING (M-PRT)
     </h3>
     <p className='text-start'> 
     This service is directed to senior skilled workers in both the public and private sectors.
     </p><br />
     <p className='text-start'>
     They are taken through necessary courses for adaptation into life after retirement. 
     </p><br />
     <button className='text-white bg-[#3379C1] px-5 py-2 mt-[5vh] mx-auto rounded-sm'>Become a Facilitator</button>
       </div>


        <div className='mt-[20vh] md:text-[1.5vw]  text-[#667085]'>
        <h3 className='font-semibold md:text-[3vw]  my-[1vh]  text-[6vw] text-[black]'>
        MOPCARE-‘”FEED-A-SENIOR”’ PROJECT (M-FEED)
     </h3><br />
     <p>
     This project was developed as an intervention for seniors during the Covid-19 lockdown in order to ensure the effectiveness of keeping them at home to avoid contracting the deadly virus which has proven more deadly to the aged.
     </p>
     <div className='mt-[10vh] flex justify-between'>
        <img src={fifth} className='w-[35vw]' alt="" />
        <img src={sixth} className='w-[40vw]' alt="" />
       </div><br />
        </div>
        <div className='text-start text-[#667085]'>
          <h4 className='text-[black] mt-[3vh] text-[6vw] md:text-[2vw] font-semibold'>
          MOPCARE-LEGAL AID & ADVOCACY (MLA)
          </h4><br />
          <p>
          We engage a pool of volunteer legal practitioners to help seniors in legal matters as needed. Here we also engage in a persistent campaign against elder- abuse and we assist seniors in handling necessary litigations, especially needy seniors.
          </p>
          <h4 className='text-[black] mt-[3vh] text-[6vw] md:text-[2vw] font-semibold'>
          MOPCARE SENIOR INTERNSHIPS (MSI)
          </h4><br />
          <p>
          We arrange for both paid and volunteer internships for seniors as needed. We create employment options to advance the contentment factor in seniors and a sense of value/relevance in the workplace.
          </p>
          <h4 className='text-[black] mt-[3vh] text-[6vw] md:text-[2vw] font-semibold'>
          MOPCARE COMMUNITY BASED HEALTH- INSURANCE (M-CBHIS)
          </h4><br />
          <p>
          We establish a functional and appropriate community based insurance that are more senior-sensitive for community groups.
          </p>
        </div>
        <div className='md:flex justify-between mx-auto w-[80vw] md:w-[80vw] md:mt-[8vh]  md:h-[15vh] mt-[5vh]'>
         <div>
            <h3 className='font-bold md:text-[1.5vw] text-[5vw] text-start'>Join our newsletter</h3>
            <br />
            <p className='text-[#667085]'>
                Stay in touch with us to get latest news and special offers
            </p>
         </div>
         <div className='my-[5vh] '>
            <input type="text" placeholder='Enter your email' className=' border-2 p-3 w-full md:w-[20vw] border-[#667085] rounded-md'/>
             <button className='rounded-md bg-[#3379C1] text-white md:w-[8vw] w-full p-3 md:mx-[2vw] mt-[5vh]'>
                Subscribe
            </button>
         </div>
        </div>
    </div>
  )
}
