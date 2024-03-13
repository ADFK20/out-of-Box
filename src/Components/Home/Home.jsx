import React from "react";
import homestyles from "./Home.module.css";
import logo from "./out of box.png";
import skills from "./images/skills in circles.jpg";

// import font from "./font/Kode_Mono,Lalezar,Readex_Pro,Reem_Kufi/Lalezar/Lalezar-Regular.ttf"
export default function Home() {
  return (
    <div>
      <img src={logo} className="w-25 m-4" />
      <div className={` my-5 ${homestyles.containerimg}`}>
        <div className={`row align-items-center ${homestyles.layer}`}>
          <div className="">
            <div className={`content  w-100 d-flex  ${homestyles.view}`}>
              <h4
                className={` text-light w-50 m-auto d-flex  justify-content-center ${homestyles.heading}`}
              >
                تعليم المدارس و الجامعات مش كفاية عشان تدخل سوق العمل
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={`container  ${homestyles.containerimgTwo}`}>
        <div className="d-flex justify-content-space-between">
          <div className="content w-100">
            <img src={skills} className={homestyles.skills} />
          </div>
          <div className={` content w-25  ${homestyles.view}`}>
            <h4 className={`w-100 my-auto ${homestyles.headingTwo}`}>
              تفتكر إيه هي المهارت الأساسية اللي لازم نتعلمها عشان تناسب منطلبات
              سوق العمل ؟؟
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
