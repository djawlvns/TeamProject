import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {SlideBox2} from "../SlideBox2";

const Container = styled.div`
  height: 80%;   
`;

const GoNewItem = styled.div`
display: flex;
  width: 100vw;
  justify-content: center;
  text-align: center;
  margin: 50px 0 100px;

  button {
    width: 200px;
    height: 50px;
    border: 1px solid black;
    font-size: 16px;
    background-color: white;
    cursor: pointer;
  }
`;

export function SeasonLb() {
  return (
    <>
      <Container>
      <SlideBox2 />
        <GoNewItem>
          <NavLink
            to="/NewItem"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button>23FW 상품 보러가기</button>
          </NavLink>
        </GoNewItem>
      </Container>
    </>
  );
}
