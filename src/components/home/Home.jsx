import Two from "./two.png";
import Im from "./Imagee.png";
import Image2 from "./Imageee.png";
import Image3 from "./Imageeee.png";
import Image4 from "./Imageeeee.png";
import Ellipse1 from "./Ellipse.png";
import Ellipse2 from "./Ellipsee.png";
import Ellipse3 from "./Ellipseee.png";
import Ellipse4 from "./Ellipseeee.png";
import Ellipse5 from "./Ellipseeeee.png";
import Ellipse6 from "./Ellipseeeeee.png";

function Home() {
  return (
    <div>
      <div
        className={`md:self-center bg-slate-400 w-full bg-cover bg-no-repeat md:h-[100vh] bg-bgm   md:bg-bgi text-center pb-[10vh]`}
      >
        <div className="md:w-[70vw] pt-[20vh] mx-auto">
          <h1 className="md:text-[5vw] text-[8vw] self-center text-white  font-bold mb-[4vh] ">
            Welcome to Mopcare
          </h1>
          <p className="text-white md:text-[1.7vw] mx-auto text-[4vw] mb-[4vh] md:w-auto w-[80vw]">
            We engage and motivatethe younger generation towards paying more
            attention to seniors psychological and emotional needs, in addition
            to their physical needs.
          </p>
          <button className="m-2 py-3 px-5 bg-white md:rounded-[1.5vh] md:text-[1.5vw] text-[#344054]">
            Learn More
          </button>
          <button className="m-2 py-3 px-5 bg-[#3379C1] md:rounded-[1.5vh] md:text-[1.5vw] text-white">
            Services
          </button>
        </div>
      </div>
      <div className="mx-auto text-center w-[80vw] mt-[10vh]">
        <p className="text-[#3379C1] md:text-[1vw]   font-medium">
          We’ve helped hundreds of elderly people
        </p>
        <p className="mb-[4vh] font-semibold text-[6vw] md:text-[3vw]">
          We’re only just getting started on our journey
        </p>
      </div>

      <div className="md:my-[20vh] my-[10vh] flex flex-col-reverse md:flex md:flex-row justify-between md:h-[80vh] w-[82.5vw] mx-auto">
        <div className="  md:w-[560px] text-center md:text-start">
          <ul className=" text-start ms-[0vw] md:w-auto md:ms-0 mt-[10vh]">
            <li className="mb-[4vh] md:flex justify-between w-[75%]">
              <div>
                <h1 className="text-[9vw] md:text-[5vw] font-medium text-[#3379C1]">
                  21
                </h1>
                <br />
                <p className="md:text-[1.5vw] font-semibold text-[#101828]">
                  Programs held
                </p>
              </div>
              <div>
                <h1 className="text-[9vw] md:text-[5vw] font-medium text-[#3379C1]">
                  1,651
                </h1>
                <br />
                <p className="md:text-[1.5vw] font-semibold text-[#101828]">
                  Attendance so far
                </p>
              </div>
            </li>
            <li className="mb-[4vh] md:flex justify-between w-[75%]">
              <div>
                <h1 className="text-[9vw] md:text-[5vw] font-medium text-[#3379C1]">
                  10k
                </h1>
                <br />
                <p className="md:text-[1.5vw] font-semibold text-[#101828]">
                  Consultations
                </p>
              </div>
              <div>
                <h1 className="text-[9vw] md:text-[5vw] font-medium text-[#3379C1]">
                  200+
                </h1>
                <br />
                <p className="md:text-[1.5vw] font-semibold text-[#101828]">
                  Relief packages sent
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <img className="rounded-[20px] md:rounded-0" src={Two} alt="two" />
        </div>
      </div>
      <div className="md:my-[20vh] flex md:flex-row flex-col justify-between md:h-[80vh] w-[80vw] text-center md:text-start md:w-[82.5vw] mx-auto">
        <div className="md:w-[560px]">
          <ul>
            <li className="mb-[5vh]">
              <h2 className="font-bold md:text-[3vw] text-[6vw]">Our Vision</h2>
              <p className="md:text-[1.5vw]  mt-[5vh] text-[#666666]">
                See our senior savor their old age
              </p>
            </li>

            <li className="my-[5vh]">
              <h2 className="font-bold md:text-[3vw] text-[6vw]">
                Our Mission
              </h2>
              <p className="md:text-[1.5vw] mt-[5vh] text-[#666666]">
                Enabling our seniors live with dignity and choice
              </p>
            </li>
            <li className="mt-[5vh]">
              <h2 className="font-bold text-[6vw]   md:text-[3vw] ">
                Long Term Strategy
              </h2>
              <p className="md:text-[1.3vw] mt-[5vh] text-[#666666] md:w-[435px] text-start mx-auto md:mx-0 w-[80vw] ">
                We engage the younger generation to achieve a paradigm shift
                from merely looking after our seniors to catering to their NEEDS
                (physical, psychological and emotional).
              </p>
              <p className="md:text-[1.4vw] mt-[5vh] text-[#666666] md:w-[435px] text-start mx-auto md:mx-0 w-[80vw]">
                MopCare empowers seniors to savor their old age; live with
                dignity and choice while engaging the younger generation to
                imbibe the proper perspective of catering to the needs our
                seniors rather than merely looking after them to keep them
                alive.
              </p>
            </li>
          </ul>
        </div>
        <div className="md:mt-0 mt-[10vh]">
          <div className="flex">
            <img className="md:w-[250px] w-[45vw] m-[10px]" src={Im} alt="" />
            <img
              className="md:w-[270px] w-[35vw] m-[10px] md:h-[270px] mt-auto"
              src={Image2}
              alt=""
            />
          </div>
          <div className="flex">
            <img
              className="md:w-[164px] w-[25vw] m-[10px] md:h-[285px]"
              src={Image3}
              alt=""
            />
            <img
              className="md:w-[356px] w-[55vw] m-[10px]"
              src={Image4}
              alt=""
            />
          </div>
          {/* <img src={two} alt="two" /> */}
        </div>
      </div>
      <div className="text-center py-[20vh]">
        <h3 className="font-bold md:text-[2.3vw] text-[8vw]">
          Senior Care Initiative
        </h3>
        <p className="md:text-[20px] text-[4vw]">
          To see our seniors savor their old age.
        </p>
        <button className="text-white bg-[#3379C1] mt-[3vh] rounded-[8px] py-[12px] px-[20px]">
          {" "}
          Support a Senior
        </button>
      </div>

      <div className="md:w-[90vw] bg-[#3379C1] md:h-[420px] mx-auto md:rounded-[2vw] flex justify-between md:p-[3%] py-[15%] px-[5%]">
        <div className="md:w-[15vw] md:h-[420px] relative  flex-col justify-between ">
          <img
            src={Ellipse1}
            alt=""
            className=" absolute left-0 rounded-full ms-0 "
          />
          <img
            src={Ellipse2}
            alt=""
            className=" absolute right-0 bottom-[35vh] rounded-full ms-auto "
          />
          <img
            src={Ellipse3}
            alt=""
            className=" absolute left-0 bottom-[10vh] rounded-full  ms-0"
          />
        </div>
        <div className="text-center">
          <h1 className="md:text-[3vw] text-[6vw] font-bold text-white">
            Subscribe To Get Updates for <br />
            Every New Courses
          </h1>
          <p className="text-[#ffffff] opacity-[70%] md:my-[6vh]">
            20k+ students daily learn with Eduvi. Subscribe for new courses.
          </p>
          <input
            placeholder="enter your email"
            type="email"
            className=" placeholder:text-white bg-[#ffffff] bg-opacity-[20%] me-0 px-[4vw] md:py-[3vh] py-[1.5vh] rounded-l-[1vw] md:w-auto w-[40vw]"
          />{" "}
          <button className="text-white bg-[#73B834] ms-0 px-[4vw] py-[1.5vh] md:py-[3vh] rounded-r-[1vw] md:w-auto w-[25vw]">
            Subscribe
          </button>
        </div>
        <div className="md:w-[20vw] relative md:h-[420px]">
          <img
            src={Ellipse4}
            className="rounded-full absolute right-0"
            alt=""
          />
          <img
            src={Ellipse5}
            className="rounded-full absolute bottom-[35vh] "
            alt=""
          />
          <img
            src={Ellipse6}
            className="rounded-full absolute right-0 bottom-[10vh]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
