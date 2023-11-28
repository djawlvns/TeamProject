import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getAllBestItems } from "../Api/api";

const Container = styled.div`
  width: calc(100vw-10px);
  min-width: 1200px;
  max-width: 1400px;
  margin: 0 auto;
`;
const BestItemBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Ul = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const ItemText = styled.div`
  color: black;
  font-size: 14px;
`;
const Thumbnail = styled.div`
position: relative;
  margin-top: 30px;
  img {
    width: 100%;
    height: 400px;
  }
`;
const BestNum = styled.div`
   position: absolute;
  top:0;
  left: 0;
  width: 40px;
  height: 35px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: 900;

  align-items: center;
  flex-direction: column;
  text-align: center;
  z-index: 100;
`;
const Li = styled.div``;
const ItemIf = styled.div`
  p {
    display: flex;
  }
`;
const Sale = styled.div`
  color: red;
`;
const ItemTitle = styled.div`
  color: black;
  font-size: 14px;
  display: flex;

  gap: 30px;
  h1 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 50px;
  }
  strong {
    margin-top: 70px;
    font-size: 14px;
  }
`;

export function BestItem() {
  const [bestitemList, setBestItemList] = useState([]);

  useEffect(() => {
    getAllBestItems().then((bestitem) => {
      setBestItemList(bestitem);
    });
  }, []);
  return (
    <>
      <Container>
        <ItemTitle>
          <h1>23FW Best상품</h1>
          <strong>전체</strong>
        </ItemTitle>
        <BestItemBanner>
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/d6f312b3dac67073bda4b0018a47c320.jpg"
            alt="배너"
          />
        </BestItemBanner>
        <ItemText>
          <p>{bestitemList.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {bestitemList.map((bestitem, index) => (
            <Li key={bestitem.id}>
              <Thumbnail>
                <a href={bestitem.link}>
                  <img src={bestitem.mainimg} alt="이미지" />
                </a>
                <BestNum>
                  <p>Best</p>
                  <p>{index + 1}</p>
                </BestNum>
                <ItemIf>
                  <p>★ 평점</p>
                  <p>{bestitem.name}</p>
                  <p>
                    <Sale>{bestitem.sale}</Sale> {bestitem.price}원
                  </p>
                </ItemIf>
              </Thumbnail>
            </Li>
          ))}
        </Ul>
      </Container>
    </>
  );
}
