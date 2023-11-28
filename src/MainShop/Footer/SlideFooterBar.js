import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../Style/SlideFooterBar.css";

const Container = styled.div`
  position: relative;
  background: #000;
  height: 38px;
  overflow: hidden;
  transition: 0.2s;
  padding-bottom: 50px;
`;
const ImgDiv = styled.div`
  padding-top: 14px;
`;
const Img = styled.img`
  height: 20px;
`;

export function SlideFooterBar() {
  return (
    <>
      <Container>
        <Swiper
          slidesPerView={13}
          loop={true}
          speed={9000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>

          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
          <SwiperSlide>
            <ImgDiv>
              <Img
                src="https://whoisnerdy.com/web/upload/images/logo_blank2.png"
                alt=""
              />
            </ImgDiv>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
