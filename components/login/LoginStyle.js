import styled from "styled-components";

const RegisterWrapper = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    background: #fafafa;

    .title {
      margin-bottom: 1.5em;
      text-align: center;
    }

    .submit {
      margin: 0 auto;
      display: block;
    }
  }
`;

export { RegisterWrapper };
