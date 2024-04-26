import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { setAuthData } from "./rtk/slices/auth";
import background from "./assets/background.png";
import nextLogo from "./assets/nextLogo.png";
import baseLogo from "./assets/baseLogo.png";

import logo1 from "./assets/ub 1.png";
import logo2 from "./assets/agaweed.png";
import logo3 from "./assets/gazl.png";



const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch(); // Initialize dispatch hook
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form...");
    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://api.socialcasesbisha.com/api/Account/Login",
        userData
      );
      console.log("Login successful:", response.data);
      // Dispatch action to store authentication data
      dispatch(
        setAuthData({
          token: response.data.token,
          email: response.data.email,
          displayName: response.data.displayName,
          role: response.data.role,
        })
      );
      // Redirect to home page or any other route
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);

      // Handle other error cases
      setError(
        error.response?.data?.errors ? (
          error.response.data.errors.map((errorMessage) => (
            <h2 className="text-red-600">{errorMessage}</h2>
          ))
        ) : (
          <h2 className="text-red-600">{error.response?.data}</h2>
        )
      );
    }
  };
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
        <div className="flex flex-col max-md:w-[90%] w-[80%] lg:w-[35%] py-10 max-md:mt-[20px] bg-white mx-auto rounded-lg text-center p-3 ">
          <form style={{ direction: "rtl" }} onSubmit={handleSubmit}>
            <h1 className="mt-[10px] max-md:mb-[10px] lg:mt-[10px] text-[24px] font-[600] ">
              تسجيل الدخول
            </h1>

            <div className="flex flex-col mb-3">
              <label className="text-right mr-[40px] lg:mr-[70px] mb-[10px] text-[20px] font-[400]">
                عنوان البريد الإلكتروني
              </label>
              <input
                type="email"
                className="w-[80%] h-[50px] lg:h-[60px] mx-auto border-[1.5px] border-black pr-1"
                placeholder="أدخل البريد الإلكتروني"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col mb-3">
              <label className="text-right mr-[40px] lg:mr-[70px] mb-[10px] text-[20px] font-[400]">
                كلمة المرور
              </label>
              <input
                type="password"
                className="w-[80%]  h-[50px] lg:h-[60px] mx-auto border-[1.5px] border-black pr-1"
                placeholder="أدخل كلمة المرور"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 text-right mr-[10%] flex flex-row gap-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                تذكرني
              </label>
            </div>
            <p className="mr-[10%] text-blue-600 text-right">
              <a href="#">هل نسيت كلمة المرور؟</a>
            </p>

            <button
              className="text-[20px] font-[600] px-4 max-md:px-8 py-3 text-center bg-[#CEB99E] w-[80%] lg:w-[350px]  mx-auto my-3 hover:bg-[#CEB99E] hover:text-white transition-all duration-300"
              type="submit"
            >
              تسجيل الدخول
            </button>
            <Link to={"/signup"}>
              <p className="text-[20px] font-[600] text-center ">
                إنشاء حساب جديد
              </p>
            </Link>

            {error}
          </form>
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

export default Signin;
