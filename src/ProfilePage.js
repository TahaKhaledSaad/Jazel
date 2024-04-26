import React from "react";
import Navheader from "./components/Navheader";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { role, token, email, displayName } = useSelector(
    (state) => state.auth
  );
  console.log(
    "data in profile",
    `name:>>${displayName}`,
    `role:>>${role}`,
    `email:>>${email}`
  );

  return (
    <div>
      <Navheader />
      <div className="w-full bg-[#ceb99c] h-screen pt-[50px]">
        <div className="w-[95%] lg:w-[70%] py-10 bg-white mx-auto rounded-lg ">
          <h1 className="mx-auto text-center  text-3xl font-[600] ">
            الصفحة الشخصية
          </h1>
          <div className="mx-auto w-[90%] lg:w-[60%]  ">
            <div className="mx-auto ">
              <h3 className="py-3 mr-[10%] text-right">اسم المستخدم</h3>
              <div className="bg-[#F5F5F5] w-[80%] mx-auto h-[60px] text-right pr-3 py-auto ">
                <p className="my-auto pt-[12px]">{displayName}</p>
              </div>
            </div>

            <div className="mx-auto ">
              <h3 className="py-3 mr-[10%] text-right">
                عنوان البريد الاكتروني
              </h3>
              <div className="bg-[#F5F5F5] w-[80%] mx-auto h-[60px] text-left pl-3 py-auto ">
                <p className="my-auto pt-[12px]">{email}</p>
              </div>{" "}
            </div>

            <div className="mx-auto ">
              <h3 className="py-3 mr-[10%] text-right">رقم الهوية</h3>
              <div className="bg-[#F5F5F5] w-[80%] mx-auto h-[60px] text-left pl-3 py-auto ">
                <p className="my-auto pt-[12px]">011102203303</p>
              </div>
            </div>

            <div className="mx-auto ">
              <h3 className="py-3 mr-[10%] text-right">رقم الهاتف</h3>
              <div className="bg-[#F5F5F5] w-[80%] mx-auto h-[60px] text-left pl-3 py-auto ">
                <p className="my-auto pt-[12px]">011102203303</p>
              </div>{" "}
            </div>

            <div className="mx-auto ">
              <h3 className="py-3 mr-[10%] text-right">متطوع</h3>
              <div className="bg-[#F5F5F5] w-[80%] mx-auto h-[60px] text-right">
                اسم الجمعية الخيرية
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
