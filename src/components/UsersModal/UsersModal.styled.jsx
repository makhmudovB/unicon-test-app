import styled from "styled-components";

const Root = styled.div`
  & > .modal-wrap {
    & > h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #004787;
    }
    & > .modal-input_wrap {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      & > span {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #929292;
      }
      & > input {
        width: 515px;
        height: 50px;
        padding-left: 25px;
        background-color: #ffffff;
        box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #004787;
        outline: none;
        border: none;
        margin-top: 10px;
        z-index: 99999px;
      }
      & > p {
        margin-top: 10px;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: red;
      }
    }
    & > .btn-wrap {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
      & > button {
        padding: 20px;
        display: flex;
        align-items: center;
        background-color: #004787;
        border-radius: 16px;
        border: none;
        cursor: pointer;
        & > span {
          margin-left: 20px;
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
  & > .success-info {
    display: flex;
    align-items: center;
    & > img {
      width: 105px;
      height: 105px;
    }
    & > h1 {
      margin-left: 30px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 33px;
      color: #000000;
    }
  }
`;

export const Styles = { Root };
