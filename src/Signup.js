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

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isVolunteer, setIsVolunteer] = useState(true);
  const [showVolunteerDropdown, setShowVolunteerDropdown] = useState(true);
  const [showGovernmentDropdown, setShowGovernmentDropdown] = useState(false);
  const [volunteerCharity, setVolunteerCharity] = useState(0); // Define state variable for volunteer charity
  const [governmentAgency, setGovernmentAgency] = useState(0); // Define state variable for government agency
  const [nationalID, setNationalID] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
    else if (name === "nationalID")
      setNationalID(value); // Handle changes for national ID
    else if (name === "contactNumber") setContactNumber(value); // Handle changes for contact number
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the userData object
    const userData = {
      displayName: username,
      email,
      contactNumbers: contactNumber, // Add the contactNumbers field with the appropriate value
      saudiNationalID: nationalID, // Add the saudiNationalID field with the appropriate value
      password,
      confirmPassword,
      isVolunteer,
    };

    if (isVolunteer) {
      userData.charities = parseInt(volunteerCharity);
    } else {
      userData.goverrateAgancy = parseInt(governmentAgency);
    }

    console.log("userData", userData);

    try {
      const response = await axios.post(
        "https://api.socialcasesbisha.com/api/Account/register",
        userData
      );
      console.log("Registration successful:", response.data);
      // Handle successful registration, e.g., redirect to login page

      // Display the response message to the user
      alert("تم التسجيل بنجاح!");

      // Navigate to the verify email page
      navigate("/signin");
    } catch (error) {
      console.error("Registration failed:", error);
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

  const handleVolunteerRadioChange = () => {
    setIsVolunteer(true);
    setShowVolunteerDropdown(true);
    setShowGovernmentDropdown(false);
  };

  const handleGovernmentRadioChange = () => {
    setIsVolunteer(false);
    setShowVolunteerDropdown(false);
    setShowGovernmentDropdown(true);
  };

  const handleVolunteerCharityChange = (e) => {
    setVolunteerCharity(e.target.value);
  };

  const handleGovernmentAgencyChange = (e) => {
    setGovernmentAgency(e.target.value);
  };
  return (
    <div className="w-full ">
      <div
        className=" w-full  mt-0"
        style={{
          backgroundImage: `url(${background})`, // Adjust the path accordingly
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex  h-[130px] w-[30%] ">
          <div className="flex flex-row  ml-[20px] mt-[20px] ">
            <img src={baseLogo} width={131} height={131} alt="Logo1" />
            <img
              src={nextLogo}
              width={189}
              height={60}
              alt="Logo2 "
              className=" h-[68px] w-[189px] my-auto"
            />
          </div>
        </div>
        <div className=" max-md:mt-[20px]   mx-auto  text-center p-3 ">
          <form
            onSubmit={handleSubmit}
            className="mb-[200px] bg-white py-10 rounded-lg flex flex-col max-md:w-[90%] w-[80%]  mx-auto"
          >
            <h3 className="text-[24px] font-[700] ">إنشاء حساب جديد</h3>

            <div className="grid grid-col-1 lg:grid-cols-2">
              <div className="mb-3 flex flex-col text-right">
                <label className="text-right mr-[40px] lg:mr-[70px] mb-[10px] text-[20px] font-[400]">
                  عنوان البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-[80%] h-[50px] lg:h-[60px] mx-auto border-[1.5px] border-black pr-1 text-right"
                  placeholder="أدخل عنوان بريدك الإلكتروني"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col mb-3">
                <label className="text-right mr-[40px] lg:mr-[70px] mb-[10px] text-[20px] font-[400]">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  className="w-[80%] h-[50px] lg:h-[60px] mx-auto border-[1.5px] border-black pr-1 text-right"
                  placeholder="الاسم المستخدم"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 flex flex-col">
                <label className="text-right mr-[40px] lg:mr-[70px] mb-[10px] text-[20px] font-[400]">
                  رقم الهوية{" "}
                </label>
                <input
                  type="text"
                  className="w-[80%] h-[50px] lg:h-[60px] mx-auto border-[1.5px] border-black pr-1 text-right"
                  placeholder="أدخل الهوية الشخصية"
                  name="nationalID"
                  value={nationalID}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 flex flex-col">
                <label className="text-right mr-[40px] lg:mr-[70px] mb-[10px] text-[20px] font-[400]">
                  رقم الاتصال{" "}
                </label>
                <input
                  type="tel"
                  className="w-[80%] h-[50px] lg:h-[60px] mx-auto border-[1.5px] border-black pr-1 text-right"
                  placeholder="أدخل رقم الاتصال"
                  name="contactNumber"
                  value={contactNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 flex flex-col">
                <label className="text-right mr-[40px] lg:mr-[70px] mb-[10px] text-[20px] font-[400]">
                  تأكيد كلمة المرور{" "}
                </label>
                <input
                  type="password"
                  className="w-[80%] h-[50px] lg:h-[60px] mx-auto border-[1.5px] border-black pr-1 text-right"
                  placeholder="أدخل كلمة المرور"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 flex flex-col">
                <label className="text-right mr-[40px] lg:mr-[70px] mb-[10px] text-[20px] font-[400]">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  className="w-[80%] h-[50px] lg:h-[60px] mx-auto border-[1.5px] border-black pr-1 text-right"
                  placeholder="أدخل كلمة المرور"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row  justify-between max-md:w-[90%]  w-[40%] mx-auto max-md:px-5 lg:pr-[85px] items-center content-between">
              <div className=" ">
                <label
                  className=" text-2xl font-bold text-[#3f4934] bg-white p-1 rounded-lg  inline-block "
                  htmlFor="flexRadioDefault1"
                >
                  جهة حكومية
                </label>
                <input
                  className="w-[20px] h-[20px] "
                  type="radio"
                  name="isVolunteer"
                  id="flexRadioDefault1"
                  checked={!isVolunteer}
                  onChange={handleGovernmentRadioChange}
                />
              </div>

              <div className=" ">
                <label
                  className="form-check-label text-2xl font-bold text-[#3f4934] bg-white p-1 rounded-lg  inline-block "
                  htmlFor="flexRadioDefault2"
                >
                  متطوع
                </label>
                <input
                  className=" w-[20px] h-[20px]"
                  type="radio"
                  name="isVolunteer"
                  id="flexRadioDefault2"
                  checked={isVolunteer}
                  onChange={handleVolunteerRadioChange}
                />
              </div>
            </div>

            {showVolunteerDropdown && (
              <div className="text-xl text-center my-2  mx-auto">
                <select
                  name=""
                  id=""
                  className=" mx-auto text-center  border-[1.5px] border-[#000000] px-3 py-2 w-[300px] "
                  onChange={handleVolunteerCharityChange}
                >
                  <option className="p-1 border-[1.5] border-[#000000] text-center">
                    {" "}
                    اختر الجمعية الخيرية
                  </option>
                  <option
                    value="0"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    جميعة البر الخيرية إيتاء{" "}
                  </option>
                  <option
                    value="1"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    جمعية الاسكان التنموية
                  </option>
                  <option
                    value="2"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    جمعية الصحية الانسانية
                  </option>
                  <option
                    value="3"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    جمعية رأفة رعاية الايتام
                  </option>
                  <option
                    value="4"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    جمعية شكر لحفظ النعمة
                  </option>
                  <option
                    value="4"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    متطوع عام
                  </option>
                </select>
              </div>
            )}

            {showGovernmentDropdown && (
              <div className="text-xl text-center  mx-auto my-2">
                <select
                  name=""
                  id=""
                  className=" mx-auto text-center  border-[1.5px] border-[#000000] px-3 py-2 w-[300px]"
                  onChange={handleGovernmentAgencyChange}
                >
                  <option className="p-1 border-[1.5] border-[#000000] text-center">
                    اختر الجهة الحكومية
                  </option>
                  <option
                    value="0"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    محافظة بيشة{" "}
                  </option>
                  <option
                    value="1"
                    className="p-3 border-[1.5] border-[#000000] text-center"
                  >
                    وزارة الصحة
                  </option>
                  <option
                    value="2"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    وزارة المواردة البشرية والتنمية الاجتماعية
                  </option>
                  <option
                    value="3"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    وزارة العدل
                  </option>
                  <option
                    value="4"
                    className="p-1 border-[1.5] border-[#000000] text-center"
                  >
                    وزارة الشئون البلدية والقروية والاسكان
                  </option>
                </select>
              </div>
            )}

            <div className="mx-auto text-center my-3">
              <button
                className="text-[20px] font-[600] px-1 lg:px-4 max-md:px-8 py-3 text-center bg-[#CEB99E] w-full lg:w-[350px]  mx-auto my-3 hover:bg-[#CEB99E] hover:text-white transition-all duration-300"
                type="submit"
              >
                {" "}
                إنشاء حساب جديد
              </button>
              <p className="forgot-password text-center">
                {error}
                مسجل بالفعل؟ <Link to="/signin">تسجيل الدخول؟</Link>
              </p>
            </div>
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
