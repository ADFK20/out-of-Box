import React from "react";
import Slider from "react-slick";
import s1 from "../../assets/images/elzero.png";
import s2 from "../../assets/images/abuzaid.png";
import s3 from "../../assets/images/ramzi.png";
import s4 from "../../assets/images/salahabuelmagd.png";

export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={s1} className="w-100" />
        </div>
        <div>
          <img src={s2} className="w-100" />
        </div>
        <div>
          <img src={s3} className="w-100" />
        </div>

        <div>
          <img src={s4} className="w-100" />
        </div>
      </Slider>
    </div>
  );
}
