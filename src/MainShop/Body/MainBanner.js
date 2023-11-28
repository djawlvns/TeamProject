import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "../Style/MainBanner_Styles.css";
import { Scrollbar } from "swiper/modules";

const Banner = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const TxtdivWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  bottom: 30px;
  left: 10%;
  padding-right: 30px;
  bottom: 15%;
  color: #fff;
  transition: all 1s ease-out;
  transition-delay: 0.5s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  z-index: 5;
`;
//커스텀 Swiper 작성 부분
const MainBannerSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
`;

const Txtdiv1 = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 20px;
  line-height: 1.5;
`;
const Txtdiv2 = styled.div`
  display: block;
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: 1.2;
`;
const Txtdiv3 = styled.div`
  display: block;
  font-size: 20px;
  font-weight: 200;
  line-height: 1.2;
`;

export function MainBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      <MainBannerSwiper
        onSlideChange={handleSlideChange} //slide 변경 여부 확인
        scrollbar={{ darggable: true }}
        modules={[Scrollbar]}
        className="swiper-container-1"
      >
        <SwiperSlide>
          <Banner
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/04e7f7ca1797c81236959ab9395b1552.jpg"
            alt="Main Banner"
          />

          <TxtdivWrapper active={activeIndex === 0}>
            <Txtdiv1>11.10 - 11.26</Txtdiv1>
            <Txtdiv2>PURPLE FRIDAY</Txtdiv2>
            <Txtdiv3>1년에 단 한번! 역대급 할인 혜택</Txtdiv3>
          </TxtdivWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f85c783fe46b384389d73b0bb2e04784.jpg"
            alt="Main Banner"
          />

          <TxtdivWrapper active={activeIndex === 1}>
            <Txtdiv1>23FW</Txtdiv1>
            <Txtdiv2>RISE ANEW, NERDY</Txtdiv2>
            <Txtdiv3>세븐틴 THE 8과 함께한 23F/W 컬렉션</Txtdiv3>
          </TxtdivWrapper>
        </SwiperSlide>
      </MainBannerSwiper>
    </>
  );
}
