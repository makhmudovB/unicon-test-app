import React from "react";
import circles from "../../assets/icons/circles.svg";
import FormBlock from "../../components/FormWrap/FormBlock";
import { Styles } from "./AuthPage.styled";

const AuthPage = () => {
  return (
    <Styles.Root>
      <div className="auth-wrap">
        <div className="crcles-wrap">
          <div className="absolute-top_wrap">
            <img src={circles} alt="circles" width="100%" height="100%" />
          </div>
          <div style={{ width: 65, opacity: 0 }} />
        </div>
        <FormBlock />
        <div className="bottom-circles_wrap">
          <div style={{ width: 65, opacity: 0 }} />
          <div className="absolute-bottom_wrap">
            <img src={circles} alt="circles" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </Styles.Root>
  );
};

export default AuthPage;
