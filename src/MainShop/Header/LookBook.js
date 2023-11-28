import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { The8LB } from "../Body/LookbookPage/The8LB";
import { SeasonLb } from "../Body/LookbookPage/SeasonLb";
import { EarlyLb } from "../Body/LookbookPage/EarlyLb";
import { BlenkLb } from "../Body/LookbookPage/BlenkLb";
import { TennisLb } from "../Body/LookbookPage/TennisLb";
import { DisneyLb } from "../Body/LookbookPage/DisneyLb";
import { useEffect, useState } from "react";
import { getAllLookbooks } from "../Api/api";

const Container = styled.div`
  width: 1200px;
  min-width: 1200px;
  min-height: 100%;
  min-height: calc(100% - 298px);
  margin: 0 auto;
  padding: 33px 0 0 0;
  position: relative;
`;

const LbTitle = styled.div`
  display: flex;
  padding: 40px;
  gap: 30px;
  h1 {
    font-size: 42px;
    font-weight: 900;
  }
  strong {
    margin-top: 16px;
    font-size: 14px;
  }
  p {
    margin-top: 16px;
    font-size: 14px;
    color: gray;
  }
`;
const Content = styled.div`
  width: 1200px;
  overflow: hidden;
`;
const UI = styled.ul`
width: 1230px;
margin-top: -25px;
margin-left: -15px;
display: flex;
flex-wrap: wrap;
list-style: none;
`;
const LI = styled.li`
position: relative;
margin: 28px 15px;
width: 380px;
list-style: none;
`
const LookbookBox = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
  img {
    width: 380px;
    height: 288px;
    border-radius: 5px;
    margin-bottom: 14px;
  }
`;


export function LookBook() {
  const [lookbookList, setLookbookList] = useState([]);

  useEffect(()=>{
    getAllLookbooks().then((lookbook) =>{
      setLookbookList(lookbook);
    })
  },[])
  return (
    <>
      <Container>
        <LbTitle>
          <h1>LOOKBOOK</h1>
          <strong>전체</strong>
          <p>진행중</p>
          <p>종료</p>
        </LbTitle>
        <Content>
          <UI>
            {lookbookList.map((lookbook,index)=>(
            <LI key={lookbook.id}>
          <LookbookBox>
            <NavLink
              to={lookbook.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={lookbook.img}
                alt="이미지"
              />
            </NavLink>
            <h3>{lookbook.title}</h3>
            <p>{lookbook.date}</p>
          </LookbookBox>
          </LI>
        ))}
        </UI>
        </Content>
        </Container>
    </>
  );
}
export function LookBookRoutes() {
  return (
    <Routes>
      <Route index element={<LookBook />} />
      <Route path="the8lb" element={<The8LB />} />
      <Route path="seasonlb" element={<SeasonLb />} />
      <Route path="earlylb" element={<EarlyLb />} />
      <Route path="blenklb" element={<BlenkLb />} />
      <Route path="tennislb" element={<TennisLb />} />
      <Route path="disneylb" element={<DisneyLb />} />
    </Routes>
  );
}
