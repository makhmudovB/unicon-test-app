import styled from "styled-components";

const Root = styled.div`
  & .header-wrap {
    padding: 0 50px;
    max-width: 100%;
    overflow: hidden;
    & > .between-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 135px;
      & > .row-block {
        display: flex;
        align-items: center;
        & > h1 {
          margin-left: 30px;
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 42px;
          color: #004787;
        }
        & > .info-block {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
          & > h2 {
            font-family: "Raleway";
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 26px;
            color: #004787;
          }
          & > p {
            margin-top: 5px;
            font-family: "Raleway";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: #00c6ff;
          }
        }
      }
    }
  }
`;

export const Styles = { Root };
