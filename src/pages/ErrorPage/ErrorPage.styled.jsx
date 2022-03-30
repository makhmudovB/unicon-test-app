import styled from "styled-components";

const Root = styled.div`
  & > .error-wrap {
    padding: 0 50px;
    max-width: 100%;
    overflow: hidden;
    & > .img-wrap {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > h1 {
        margin-top: 70px;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        color: #004787;
      }
      & > p {
        margin-top: 25px;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #929292;
      }
      & > button {
        margin-top: 40px;
        padding: 15px 30px;
        border: none;
        background-color: #004787;
        border-radius: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
        & > span {
          margin-left: 15px;
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 21px;
          color: #ffffff;
        }
      }
    }
  }
`;

export const Styles = { Root };
