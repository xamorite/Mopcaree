import first from './ser1.png';
import second from './ser2.png';
import third from './ser3.png';
import fourth from './ser4.png';
// import fifth from './ser5.png';
// import sixth from './ser6.png';

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
          <h3 className='font-semibold md:text-[3vw] mb-[5vh]  text-[6vw] text-[black]'>MOPCARE RETIRED SENIORS VOLUNTEER PARTNERSHIP (M-RSVP)</h3><br />
          <p>
          This is a subsidiary of Mopcare volunteer partnership (above).This is a more specific arm of volunteers for retirees from both public and private sectors
          </p><br />
          <p>
          It helps for group-training and jobs/senior- internship selection processes
          </p>


       </div>

    </div>
  )
}
