import Granny from './granny.png'
import Gmail from './email.png'

function Contact() {
  return (
    <div className="mx-auto md:w-[80vw] w-[80vw] ">
      <div className="flex md:flex-row flex-col justify-between mx-auto gap-10 ">
        <div className='md:text-center mt-[5vh] '>
          <h3 className="text-[#3379C1] font-bold md:text-[1.3vw] ">Contact Us</h3>
          <h1 className="font-bold md:text-[3vw] text-[6vw] ">Get in touch </h1>
          <p className="text-[#667085] md:text-[1.5vw] ">Our friendly team would love to hear from you.</p>




          <div className="form my-[8vh] flex flex-col text-start justify-between gap-6  mx-auto">
            <div className="grid md:grid-cols-12  md:gap-6 gap-3 ">
              <div className='w-full md:col-span-6 '>
                <p>First name</p>
                <input type="text" placeholder="First name " className="p-3 border-[#667085] border-[1px] rounded-md w-full" />
              </div>
              <div className='w-full md:col-span-6'>
                <p>Last name</p>
                <input type="text" placeholder="Last name " className="p-3 border-[#667085] border-[1px] rounded-md w-full" />
              </div>
            </div>

            <div className="w-full " >
              <p>Email</p>
              <input type="email" placeholder="You@gmail.com " className="p-3 border-[#667085] border-[1px] rounded-md w-full" />
            </div>
            <div className="w-full " >
              <p>Phone number</p>
              <input type="email" placeholder="+234 9000000000" className="p-3 border-[#667085] border-[1px] rounded-md w-full" />
            </div>
            <div className="w-full " >
              <p>Message</p>
              <textarea className="p-3 border-[#667085] border-[1px] rounded-md w-full md:h-[25vh]" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className="w-full p-3 bg-[#3379C1] rounded-md text-white">
              send message
            </button>
          </div>



        </div>
        <div>
          <img className='mx-auto md:rounded-none md:h-auto h-[40vh] w-full rounded-[2rem]' src={Granny} />
        </div>
      </div>
      <div className='text-center mt-[10vh]'>
        <h3 className='text-[#3379C1] md:text-[1.5vw] font-bold'>
          Contact us
        </h3>
        <p className='font-bold md:text-[2vw] text-[4vw] '>
          We’d love to hear from you
        </p>
        <p>
          Our friendly team is always here to chat.
        </p>
      </div>

      <div className='md:flex md:flex-row flex-col  justify-between text-center mt-9'>
        <div className='p-6'>
          <img src={Gmail} className='md:w-[3vw] w-[9vw] mx-auto' alt="" />
          <h4 className='font-bold'>Email</h4>
          <p className='text-[#667085]'>Our friendly team is here to talk</p>
          <p className='text-[#3379C1] font-bold'>mopcareteam@gmail.com</p>
        </div>
        <div className='p-6'>
          <img src={Gmail} className='md:w-[3vw] w-[9vw] mx-auto' alt="" />
          <h4 className='font-bold'>Office</h4>
          <p className='text-[#667085]'>Come say hello at our office HQ.</p>
          <p className='text-[#3379C1] font-bold'>Kampala Shopping Complex,<br /> Itoku, Abeokuta, Ogun State.</p>
        </div>
        <div className='p-6'>
          <img src={Gmail} className='md:w-[3vw] w-[9vw] mx-auto' alt="" />
          <h4 className='font-bold'>Phone</h4>
          <p className='text-[#667085]'>Mon-Fri from 8am to 5pm</p>
          <p className='text-[#3379C1] font-bold'>+(234) 803-437-5758</p>
        </div>


      </div>
      <div className='md:flex justify-between mx-auto w-[80vw] md:w-[80vw] md:mt-[8vh]  md:h-[15vh] mt-[5vh]'>
        <div>
          <h3 className='font-bold md:text-[1.5vw] text-[5vw]'>Join our newsletter</h3>
          <br />
          <p className='text-[#667085]'>
            Stay in touch with us to get latest news and special offers
          </p>
        </div>
        <div className='my-[5vh] '>
          <input type="text" placeholder='Enter your email' className=' border-2 p-3 w-full md:w-[20vw] border-[#667085] rounded-md' />
          <button className='rounded-md bg-[#3379C1] text-white md:w-[8vw] w-full p-3 md:mx-[2vw] mt-[5vh]'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
