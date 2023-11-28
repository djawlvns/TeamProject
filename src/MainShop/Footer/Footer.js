import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid #eaeaea;
  padding: 20px 0;
  width: 100%;
`;
const FooterBox = styled.div`
  padding: 50px;
`;
const Img = styled.img`
  width: 70px;
  height: 14px;
`;
const FooterText = styled.div`
  font-size: 11px;
  color: #5f5f5f;
  margin-top: 12px;
  margin-bottom: 4px;
`;

const FooterText2 = styled.div`
  font-size: 10px;
  color: darkgrey;
  p {
    margin-bottom: 4px;
  }
`;

const FooterText3 = styled.div`
  font-size: 10px;
  color: darkgrey;
  margin-top: 12px;
`;

export function Footer() {
  return (
    <>
      <Container>
        <FooterBox>
          <Img src="https://whoisnerdy.com/web/upload/images/nerdy_logo_bk.png" />
          <FooterText>
            <strong>주식회사 디더블류</strong>
          </FooterText>
          <FooterText2>
            <p>대표이사 : 김대우 / 대전광역시 중구 선화동 DW아카데미 5층</p>
            <p>사업자등록번호 220-88-7777777</p>
            <p>통신매업신고 : 제2020-대전선화-1174</p>
            <p>개인정보책임자 : 이대우(dw123@dw-in.com)</p>
          </FooterText2>
          <FooterText3>
            <p>© NERDY all rights reserved. HostIing by CAFE24</p>
          </FooterText3>
        </FooterBox>
      </Container>
    </>
  );
}
