import React from "react";
import cloudImag from "../assets/cloud.png";
import HomeImg1 from "../assets/homeImg1.png";

const HomeComp1 = () => {
  const handleVolunteerRegistration = () => {
    window.open("https://forms.gle/ubqVDhtUkKhVHix16", "_blank");
  };

  const handleHumanitarianRegistration = () => {
    window.open("https://forms.gle/xBZieWw92nT5hEMj7", "_blank");
  };
  return (
    <div className="w-full bg-white ">
      <div className="flex flex-col">
        <div className="flex flex-row px-[5%] mb-3 justify-between">
          <div className="flex flex-row">
            <img src={cloudImag} alt="" />
            <h3 className="items-baseline my-auto text-[24px] font-[700]">
              27 C محافظة بيشة
            </h3>
          </div>
          <h3 className="items-baseline my-auto text-[24px] font-[700]">
            تعريف بالموقع
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-[5%] justify-between">
          <img src={HomeImg1} alt="" className="mx-auto max-md:w-full" />
          <div className=" text-right  justify-between flex flex-col ">
            <p className="font-Cairo text-2xl font-semibold leading-11 text-right p-3 my-3">
              نفذ فريق جزل التطوعي بالتعاون مع محافظة بيشة وجامعة بيشة فكرة موقع
              إلكتروني يهتم بالحالات الإنسانية والعمل التطوعي بالمحافظة من خلال
              متابعة الاعمال عبر خريطة تفاعلية يسهل الإجراءات ويميز هذا الموقع
              بالشفافية والوضح الكاملة للمسؤول , وسهولة معرفة الفرص التطوعية
              والاعمال الإنسانية واخر اخبارها بالمحافظة .
            </p>
            <h3 className="font-Cairo text-2xl font-bold leading-11 text-right px-3 ">
              كيف يمكنني تسجيل حالتي الإنسانية ؟
            </h3>
            <p className="font-Cairo text-2xl font-semibold leading-11 text-right p-3 my-3">
              يمكنك تسجيل حالتك الإنسانية عبر خانة التسجيل في " الرئيسية " حيث
              ستصل للجهات ذات العلاقة حكومية كانت او أهلية ويمكن التفاعل معها
              عبر القطاع الثالث
            </p>
            <div className="w-[80%] mx-auto flex flex-row justify-between  p-3">
              <button
                className="px-8 py-2 bg-[#F5F5F5] font-Cairo text-lg font-bold leading-7 text-right rounded-lg"
                onClick={handleHumanitarianRegistration}
              >
                تسجيل حالتي الإنسانية
              </button>
              <button
                className="px-8 py-2 bg-[#CEB99E] text-white font-Cairo text-lg font-bold leading-7 text-right rounded-lg"
                onClick={handleVolunteerRegistration}
              >
                تسجيل المتطوعين
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp1;
