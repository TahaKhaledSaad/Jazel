
import logo from "./logo.svg";
import "./App.css";
import background from "./assets/background.png";
import nextLogo from "./assets/nextLogo.png";
import baseLogo from "./assets/baseLogo.png";
import logo1 from "./assets/ub 1.png";
import logo2 from "./assets/agaweed.png";
import logo3 from "./assets/gazl.png";
const First = () => {
  return (
    <div className="w-full h-screen ">
      <div
        className=" w-full h-full mt-0"
        style={{
          backgroundImage: `url(${background})`, // Adjust the path accordingly
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex  h-[130px] w-[30%] ">
          <div className="flex flex-row  ml-[20px] mt-[20px] ">
            <img src={baseLogo} width={131} height={131} alt="Logo1" />
            <div className="my-auto">
              <img
                src={nextLogo}
                width={189}
                height={60}
                alt="Logo2 "
                className=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="text-[20px] font-[600] px-8 py-3 text-center bg-white w-[350px]  mx-auto mt-[20vh] hover:bg-[#CEB99E] hover:text-white transition-all duration-300">
            <a href={"/signin"}> تسجيل الدخول</a>
          </button>
          <button className="text-[20px] font-[600] px-8 py-3 text-center bg-[#F5F5F5] w-[350px]  mx-auto my-3 hover:bg-[#CEB99E] hover:text-white transition-all duration-300">
            <a href={"/signup"}> تسجيل حساب جديد</a>
          </button>
        </div>
      </div>
      <div className="w-full max-md:h-[20vh] h-[30vh] bg-[#CEB99E]">
        <h1 className="text-white text-4xl pr-7 font-[800] mr-5 pt-5 text-right ">
          شركاء النجاح{" "}
        </h1>
        <div className="max-md:h-[10vh] h-[20vh] flex flex-row-reverse  items-baseline justify-start pr-10">
          <img
            src={logo1}
            className="max-md:w-[60px] max-md:h-[60px] w-[120px] h-[120px] mx-[20px] "
            alt="Logo1"
          />
          <img
            src={logo2}
            className="max-md:w-[60px] max-md:h-[60px] w-[120px] h-[120px] mx-[20px] "
            alt="Logo2"
          />
          <img
            src={logo3}
            className="max-md:w-[60px] max-md:h-[60px] w-[120px] h-[120px] mx-[20px] "
            alt="besha"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
