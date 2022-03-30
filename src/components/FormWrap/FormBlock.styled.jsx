import styled from "styled-components";

const Root = styled.div`
  & > .form-wrap {
    background: linear-gradient(106.45deg, #000428 -10.44%, #004e92 104.86%);
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.25);
    position: relative;
    display: flex;
    width: 500px;
    height: 300px;
    border-radius: 20px;
    & > .form-block {
      display: flex;
      flex-direction: column;
      z-index: 2;
      margin-top: 30px;
      margin-left: 40px;
      & > .line {
        width: 30px;
      }
      & > h1 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        margin-top: 10px;
        line-height: 27px;
        color: #ffffff;
      }
      & > p {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        color: #b7b7b7;
        margin-top: 5px;
        z-index: 999;
      }
      & > .input-wrap {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 10px;
        width: 180px;
        height: 30px;
        margin-top: 20px;
        & > .login-icon {
          width: 9px;
          height: "100%";
          background-color: #ffb800;
          border-radius: 10px 0 0 10px;
        }
        & > input {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 10px;
          padding-left: 10px;
          outline: none;
          font-family: "Raleway";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #9e9e9e;
        }
        & > .show-password {
          width: 21px;
          height: 21px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
      & > span {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 16px;
        color: red;
      }
      & > button {
        border: none;
        background: rgba(255, 184, 0, 0.83);
        border-radius: 11px;
        cursor: pointer;
        width: 120px;
        height: 30px;
        margin-top: 15px;
      }
    }
    & > .map-block {
      position: absolute;
      z-index: 1;
      width: 370px;
      height: 300px;
      right: 0;
      bottom: -15px;
    }
  }
`;

export const Styles = { Root };
