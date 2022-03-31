import styled from "styled-components";

const Root = styled.div`
  & > .user-row_wrap {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    & > .row-item {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 25px;
      background-color: #f4f4f4;
      border-radius: 21px;
      margin-left: 30px;
      & .user-info {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex: 4;
        & > p {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: #004787;
        }
        & > span {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          color: #004787;
          margin-left: 20px;
        }
      }
      & > .org-name_wrap {
        display: flex;
        justify-content: flex-start;
        flex: 4;
        & > span {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #004787;
        }
      }
      & > .dots-wrap {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        cursor: pointer;
        // & > .edit {
        //   display: flex;
        //   position: absolute;
        //   top: 6px;
        //   right: 0;
        //   padding: 15px;
        //   background-color: #ffffff;
        //   box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.25);
        //   border-radius: 25px;
        //   & > button {
        //     padding: 0 15px;
        //     width: 205px;
        //     height: 45px;
        //     display: flex;
        //     align-items: center;
        //     background-color: #f4f4f4;
        //     border-radius: 16px;
        //     border: none;
        //     cursor: pointer;
        //     & > span {
        //       margin-left: 15px;
        //       font-family: "Raleway";
        //       font-style: normal;
        //       font-weight: 700;
        //       font-size: 14px;
        //       line-height: 16px;
        //       color: #004787;
        //     }
        //   }
        // }
      }
    }
  }
`;

const Edit = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  right: 0;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  & > button {
    padding: 0 15px;
    width: 205px;
    height: 45px;
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    & > span {
      margin-left: 15px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #004787;
    }
  }
`;

export const Styles = { Root, Edit };
