import { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";

// 슬라이드 한개의 크기를 여기서 세팅함(px)
// 화면 전체는 window.innerWidth, window.innerHeight를 사용
const WIDTH = 1897;
const HEIGHT = 600;
const DRAG_THRESHOLD = 20; // 일정 거리 이상 이동해야 슬라이드를 넘김

// 화면전체. 슬라이드 컨테이너를 화면 가운데 배치
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  margin-left: 5%;
  padding: 0 40px;
`;
// 슬라이드 1개를 보여주는 윈도우. 슬라이드 하나의 사이즈를 가짐(액자형식)
const Container = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1920px;
  min-width: 1200px;
  overflow: hidden;
  position: relative;
  /* cursor: grab; 드래그 가능한 커서로 설정 */
  user-select: none; /* 드래그 시 텍스트 선택 방지 */
`;
// 이동하는 슬라이드, 여러개의 슬라이드가 연결되어있음
const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.$translateX}px);
  z-index: 1;
`;

// 슬라이드 1개의 스타일링
const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${(props) => props.$left}px;
  top: 0;
  z-index: 1;
`;
// StatusBar ( 슬라이드 전체 범위 표시 바)
const StatusBar = styled.div`
  width: 100%;
  height: 10px;
  background: #000000;
  opacity:0.8;
  position: absolute;
  bottom: 0;
  z-index: 2;
  
`;

// InnerBar (이동하는 바)
const InnerBar = styled.div`
  height: 100%;
  background: darkgrey;  
  width: 412px;
  transition: transform 0.5s ease;
  z-index: 3;
  transform: translateX(${(props) => `calc(412px * (${props.currentPage}))`});
`;

const Img = styled.img`
  height: 100%;
`;

export function SlideBox2() {
  const pageList = [Page1, Page2, Page3, Page4];
  const [slideX, setSlideX] = useState(0);
  const [currentPage, SetCurrentPage] = useState(0);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);
  const pageWidth = WIDTH; // 각 페이지의 너비
  const totalPageCount = pageList.length;
  /* const isAutoSlide = useRef(false); */

  // 페이지 순환 함수
  const getNextPage = useCallback(
    (page) => (page + 1) % totalPageCount,
    [totalPageCount]
  );
  const getPrevPage = useCallback(
    (page) => (page - 1 + totalPageCount) % totalPageCount,
    [totalPageCount]
  );

  //슬라이드 좌우 버튼함수
  function handleLeftBtn() {
    setSlideX((prevSlideX) => {
      // 변경된 부분: 현재 페이지가 첫 번째 페이지일 때, 마지막 페이지로 이동
      if (currentPage === 0) {
        return -(totalPageCount - 1) * pageWidth;
      }
      return Math.min(prevSlideX + pageWidth, 0);
    });
    SetCurrentPage((prevPage) => getPrevPage(prevPage));
  }

  const handleRightBtn = useCallback(() => {
    setSlideX((prevSlideX) => {
      if (currentPage === totalPageCount - 1) {
        return 0;
      }
      return Math.max(
        prevSlideX - pageWidth,
        -(totalPageCount - 1) * pageWidth
      );
    });
    SetCurrentPage((prevPage) => getNextPage(prevPage));
  }, [currentPage, totalPageCount, pageWidth, getNextPage]);

  // 자동 슬라이드 동작을 수행하는 useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      handleRightBtn();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleRightBtn]);

  //드래그 시 슬라이드 이동 실행 부
  function handleDragStart(e) {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  }

  function handleDragMove(e) {
    if (isDragging.current) {
      const distance = e.clientX - dragStartX.current;
      if (Math.abs(distance) > DRAG_THRESHOLD) {
        if (distance > 0) {
          handleLeftBtn();
        } else {
          handleRightBtn();
        }
        dragStartX.current = e.clientX;
        isDragging.current = false;
      }
    }
  }

  function handleDragEnd() {
    dragStartX.current = null;
    isDragging.current = false;
  }

  return (
    <>
      <Wrapper>
        <Container
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
        >
          {pageList.map((Page, i) => (
            <Slide key={i} style={{ transform: `translateX(${slideX}px)` }}>
              {/* 변경된 부분: Page1에서 왼쪽으로 슬라이드할 때 Page4로 이동 */}
              {i === getPrevPage(Page1) && (
                <Page4 key={i} left={pageWidth * i} />
              )}
              <Page key={i} left={pageWidth * i} />
            </Slide>
          ))}
              <StatusBar>
            {/*InnerBar의 width를 현재 페이지 1개분으로 설정 */}
            <InnerBar currentPage={currentPage} />
          </StatusBar>
        </Container>
        {/* 좌우 버튼 구현부 */}
        {/* <Btn1 onClick={handleLeftBtn}>LEFT</Btn1>
        <Btn2 onClick={handleRightBtn}>RIGHT</Btn2> */}
      </Wrapper>
    </>
  );
}

function Page1({ left }) {
  return (
    <>
      <Page $left={left}>
        <Img
          src="https://whoisnerdy.com/web/upload/event/2023/editorial_01.png?ver=2"
          alt=""
        />
      </Page>
    </>
  );
}
function Page2({ left }) {
  return (
    <>
      <Page $left={left}>
        <Img
          src="https://whoisnerdy.com/web/upload/event/2023/editorial_02.png?ver=2"
          alt=""
        />
      </Page>
    </>
  );
}
function Page3({ left }) {
  return (
    <>
      <Page $left={left}>
        <Img
          src="https://whoisnerdy.com/web/upload/event/2023/editorial_03.png?ver=2"
          alt=""
        />
      </Page>
    </>
  );
}
function Page4({ left }) {
  return (
    <>
      <Page $left={left}>
        <Img
          src="https://whoisnerdy.com/web/upload/event/2023/editorial_04.png?ver=2"
          alt=""
        />
      </Page>
    </>
  );
}
