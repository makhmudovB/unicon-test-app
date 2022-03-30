import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { Styles } from "./ErrorPage.styled";
import goBack from "../../assets/icons/goBack.svg";

const ErrorPage = ({ headerShown, title, subtitle, image, onBack }) => {
  const { response } = useSelector((state) => state.auth);
  return (
    <>
      {headerShown && (
        <Header title="404" userName="Full Name" role={response?.role} />
      )}
      <Styles.Root>
        <div className="error-wrap">
          <div
            className="img-wrap"
            style={{ height: headerShown ? "80vh" : "100vh" }}
          >
            <img src={image} alt="404" />
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button onClick={onBack}>
              <img src={goBack} alt="goBack" />
              <span>Ортга қайтиш</span>
            </button>
          </div>
        </div>
      </Styles.Root>
    </>
  );
};

export default ErrorPage;
