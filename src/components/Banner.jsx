import React from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      {/* self closing div for creating of gradient like effect */}
      <div className="absolute w-full h-28 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <picture>
            <source
              media="(max-width:640px)"
              srcSet="https://m.media-amazon.com/images/G/31/img22/Feb/Coop/Daawat._CB615167090_.jpg"
            />
            <img
              loading="lazy"
              src="https://m.media-amazon.com/images/I/61tk4B-Bx+L._SX3000_.jpg"
              alt="alexa-ad"
            />
          </picture>
        </div>
        <div>
          <picture>
            <source
              media="(max-width:640px)"
              srcSet="https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg"
            />
            <img
              loading="lazy"
              src="https://m.media-amazon.com/images/I/716juDVXF5L._SX3000_.jpg"
              alt="alexa-ad"
            />
          </picture>
        </div>
        <div>
          <picture>
            <source
              media="(max-width:640px)"
              srcSet="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_UL320_.jpg"
            />
            <img
              loading="lazy"
              src="https://m.media-amazon.com/images/I/61p6tb5x6AL._SX3000_.jpg"
              alt="alexa-ad"
            />
          </picture>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
