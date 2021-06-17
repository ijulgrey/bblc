import styled from "styled-components";

const FormWrapper = styled.div`
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

const ContentWrapper = styled.div`
  .site-layout {
  }

  .site-layout .site-layout-background {
    background: #fff;
    padding: 24px;
    min-height: 100vh;
  }
`;

const MenuWrapper = styled.div`
  .menu {
    float: right;
  }
`;

export { FormWrapper, ContentWrapper, MenuWrapper };
