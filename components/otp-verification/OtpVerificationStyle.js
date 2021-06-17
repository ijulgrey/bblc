import styled from "styled-components";

const CardWrapper = styled.div`
  min-width: 450px;
`;

const OTPWrap = styled.div`
  div {
    justify-content: center;
    div {
      input {
        width: 80px !important;
        height: 45px;
        font-size: 1.5em;
        border: 1px solid black;
      }
    }
  }
`;

const ResendWrap = styled.p`
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
`;

export { CardWrapper, OTPWrap, ResendWrap };
