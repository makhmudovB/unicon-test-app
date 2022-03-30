import styled from "styled-components";

const Root = styled.div`
  & > .home-wrapper {
    padding: 0 50px 50px 50px;
    max-width: 100%;
    height: 100%;
    overflow: hidden;
    & > .between-block {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-direction: column;
      & > .row-block {
        display: flex;
        align-items: center;
        flex-direction: column;
        & > .search-wrap {
          padding: 0 25px;
          width: 100%;
          height: 50px;
          background-color: #ffffff;
          box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & > input {
            padding-left: 15px;
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            font-family: "Raleway";
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 14px;
            color: #004787;
          }
          & > button {
            padding: 10px 15px;
            background: #004787;
            border-radius: 12px;
            border: none;
            font-family: "Raleway";
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: #ffffff;
            cursor: pointer;
          }
        }
        & > .select-block {
          width: 100%;
          height: 50px;
          padding: 0 25px;
          cursor: pointer;
          background-color: #ffffff;
          box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          position: relative;
          & > h1 {
            font-family: "Raleway";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #929292;
          }
          & .select-items_wrap {
            position: absolute;
            top: 55px;
            left: 0;
            width: 100%;
            min-height: 300px;
            max-height: 300px;
            overflow-x: scroll;
            background-color: #ffffff;
            box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
            border-radius: 16px;
            z-index: 3;
            & > .select-item {
              height: 50px;
              border-bottom: 1px solid #e4e4e4;
              display: flex;
              align-items: center;
              padding-left: 25px;
              & > h1 {
                font-family: "Raleway";
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 16px;
                color: #929292;
              }
            }
          }
        }
      }
      & > .create-user-btn {
        margin-top: 20px;
        height: 50px;
        padding: 0 25px 0 20px;
        display: flex;
        align-items: center;
        background-color: #ffb800;
        box-shadow: 0px 4px 8px 2px rgba(255, 184, 0, 0.25);
        border-radius: 16px;
        border: none;
        cursor: pointer;
        & > h1 {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          color: #004787;
          margin-left: 10px;
        }
      }
    }
    & > .head-cell_wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      & > .head-cell_item {
        flex: 2;
        display: flex;
        justify-content: flex-start;
        & > .empty {
          width: 112px;
        }
        & > span {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 19px;
          color: #9a9a9a;
        }
        &:first-child {
          flex: 6;
          display: flex;
          justify-content: flex-start;
        }
        &:last-child {
          flex: 4;
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  }
`;

export const Styles = {
  Root,
};
