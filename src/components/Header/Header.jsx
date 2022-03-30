import React from "react";
import burger from "../../assets/icons/burger.svg";
import { Styles } from "./Header.styled";

const Header = ({ title, userName, role }) => {
  return (
    <Styles.Root>
      <div className="header-wrap">
        <div className="between-block">
          <div className="row-block">
            <img src={burger} alt="burger" width="100%" height="100%" />
            <h1>{title}</h1>
          </div>
          <div className="row-block">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="userImg"
              width={40}
              height={40}
            />
            <div className="info-block">
              <h2>{userName}</h2>
              <p>{role}</p>
            </div>
          </div>
        </div>
      </div>
    </Styles.Root>
  );
};

export default Header;
