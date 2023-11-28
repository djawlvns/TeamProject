import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../Style/SlideItem_styles.css";

// import required modules
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import styled from "styled-components";

const Container = styled.div`
  background: #f9fafd;
`;
const Notice = styled.div`
  display: flex;
  line-height: 40px;
  margin-right: 5px;
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.35);
  padding: 10px 0 0 50px;
  background: #f9fafd;
`;
const Notice_Img = styled.img`
  height: 35px;
`;

export function SlideItem() {
  return (
    <>
      <Container>
        <Notice>
          <Notice_Img
            src="https://whoisnerdy.com/web/upload/images/ico_finger3.png"
            alt=""
          />
          스와이프하여 원하는 제품을 골라보세요.
        </Notice>
        <Swiper
          slidesPerView={5}
          spaceBetween={0.1}
          centeredSlides={true}
          speed={1500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[FreeMode, Autoplay, Navigation]}
          loop={true}
          //마우스 드래그 시 발생하는 빈공간 해결 구문
          freeMode={true}
          freeModeMomentum={true}
          freeModeSticky={true}
          freeModeMomentumVelocityRatio={0.1}
          freeModeMinimumVelocity={0.1}
          id="SlideItem_Swiper"
        >
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1af16c22d07550f24445277c1635e1c3.jpg"
              alt="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1fa0ee4d773bb80f3a765c8d309172a1.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/9e8e093b72984389873f96ea4d04c235.jpg"
              alt="2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/48bceadda820a2461427d4974c656a8d.jpg"
              alt="3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/83bdb9e9b92e4c09a2eb3e53568d6bec.jpg"
              alt="4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/59ad7fb98d31095b5c4b72c06f1c78e7.jpg"
              alt="5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/633c35e3e9d350a4d9b5bd896b773286.jpg"
              alt="6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/35b27d65d165ee989ca8f720585cb44a.jpg"
              alt="7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/27c76f7a717e0bdad1cacb53b61d8494.jpg"
              alt="8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/50926c3854a1200bb5a4e1f8cddd5e58.jpg"
              alt="9"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/df2a422ff988706b72df92f402a0be8d.jpg"
              alt="10"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/ac09a10b431dec2acba4ba51a695248a.jpg"
              alt="11"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1ceb9cb839ec5ad39a083f71ad95ded6.jpg"
              alt="12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/64155579b88b578a81514773b00c343f.jpg"
              alt="13"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
