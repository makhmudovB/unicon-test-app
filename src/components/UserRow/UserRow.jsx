import React from "react";
import dots from "../../assets/icons/dots.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import icon from "../../assets/icons/icon.svg";
import { Styles } from "./UserRow.styled";

const UserRow = ({ editUser, count, userName, orgName, onClick, userMenu }) => {
  return (
    <Styles.Root>
      <div className="user-row_wrap">
        <img src={icon} alt="icon" />
        <div className="row-item">
          <div className="user-info">
            <p>{count}</p>
            <span>{userName}</span>
          </div>
          <div className="org-name_wrap">
            <span>{orgName}</span>
          </div>
          <div className="dots-wrap" onClick={onClick}>
            <img src={dots} alt="dots" />
            {userMenu && (
              <div className="edit">
                <button onClick={editUser}>
                  <img src={editIcon} alt="editIcon" />
                  <span>Ўзгартириш</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Styles.Root>
  );
};

export default UserRow;
