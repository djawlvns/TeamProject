import styled from "styled-components";

const Container = styled.div`
  width: calc(100%);
  max-width: 1400px;
  margin: 0 auto;
  min-width: 1200px;
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
`;
const ItemText = styled.div`
  color: black;
  font-size: 14px;
  h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;
const Thumbnail = styled.div`
  margin-top: 30px;
  img {
    width: 100%;
    height: 400px;
  }
`;
const BestNum = styled.div`
  width: 40px;
  height: 35px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: 900;
  display: flex;
  align-items: center;
  flex-direction: column;
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

export function Acc() {
  const productList = [
    /* 리스트에 상품 정보를 추가하세요 */
  ];
  return (
    <>
      <Container>
        <BestItemBanner>
          <img src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/db60889b5882a9635ca35a2a0eee27f6.jpg" />
        </BestItemBanner>
        <ItemText>
          <p>{productList.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {productList.map((product, index) => (
            <Li key={index}>
              <Thumbnail>
                <a href={product.link}>
                  <img src={product.imageUrl} alt="이미지" />
                </a>
                <BestNum>
                  <p>Best</p>
                  <p>{index + 1}</p>
                </BestNum>
                <ItemIf>
                  <p>★ 평점</p>
                  <p>{product.name}</p>
                  <p>
                    <Sale>{product.salePercentage}</Sale> ~원
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
