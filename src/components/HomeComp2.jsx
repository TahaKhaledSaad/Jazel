import React from "react";
import homeImag2 from "../assets/homeImage2.png";

const HomeComp2 = () => {
  return (
    <div className="w-full h-[70v] bg-[white] py-10">
      <div className="flex flex-col lg:flex-row  justify-between px-[3%]">
        <img src={homeImag2} alt="" />
        <div className="flex flex-col w-full lg:w-[50%]">
          <h2 className="font-Cairo text-3xl font-bold leading-[67.46px] text-right">الأخبار</h2>
          <p className="font-Cairo text-2xl font-semibold leading-[44.98px] text-right">
            شارك سعادة رئيس الجامعة أ.د.محمد بن محسن صفحي، في الاجتماع
            التشاوري الخامس لرؤساء الجامعات في المملكة، الذي عقد في محافظة
            الأحساء، برئاسة معالي وزير التعليم رئيس مجلس شؤون الجامعات الأستاذ
            يوسف بن عبدالله البنيان​.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComp2;
