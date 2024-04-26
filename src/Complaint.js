import React, { useState } from "react";
import Navheader from "./components/Navheader";
import Footer from "./components/Footer";

const Complaint = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    username: "",
    contactNumber: "",
    phoneNumber: "",
    complaintMessage: "",
  });

  // Function to handle changes in form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Print form data to the console
  };

  return (
    <div className=" justify-between flex flex-col bg-[#CEB99E]">
      <Navheader />
      <div className="w-[70%] bg-white py-5 px-5 mx-auto mt-5 mb-10 rounded-xl">
        <h1 className="text-center my-5 text-3xl font-[600]  ">إرسال الشكوى</h1>
        <form
          onSubmit={handleSubmit}
          className="w-[70%] mx-auto px-5 text-right py-5"
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-5" htmlFor="username">
              اسم العميل
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#CEB99E] w-[80%] mx-auto mb-5 text-right"
              placeholder="اسم العميل"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-5"
              htmlFor="contactNumber"
            >
              رقم الهوية
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#CEB99E] w-[80%] mx-auto mb-5 text-right"
              placeholder="رقم الهوية"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-5"
              htmlFor="phoneNumber"
            >
              رقم الهاتف{" "}
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#CEB99E] w-[80%] mx-auto mb-5 text-right"
              placeholder="  رقم الهاتف"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-5"
              htmlFor="complaintMessage"
            >
              تفاصيل الشكوى{" "}
            </label>
            <textarea
              id="complaintMessage"
              name="complaintMessage"
              value={formData.complaintMessage}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none h-[160px] focus:border-[#CEB99E] w-[80%] mx-auto mb-5 text-right"
              placeholder="تفاصيل الشكوى"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#CEB99E]  text-white font-bold py-2 px-12 rounded block justify-center mx-auto "
          >
            إرسال
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Complaint;
