import styled from "styled-components";

const Root = styled.div`
  & > .auth-wrap {
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > .crcles-wrap {
      display: flex;
      flex-direction: column;
      max-width: 65px;
      & > .absolute-top_wrap {
        position: absolute;
        top: 0;
        left: 40px;
        max-width: 65px;
      }
    }
    & > .bottom-circles_wrap {
      height: 100%;
      & > .absolute-bottom_wrap {
        position: absolute;
        bottom: -65px;
        right: 40px;
        max-width: 65px;
      }
    }
  }
`;

export const Styles = { Root };
