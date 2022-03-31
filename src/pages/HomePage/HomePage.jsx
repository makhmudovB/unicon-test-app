import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createUserIcon from "../../assets/icons/createUserIcon.svg";
import dropIcon from "../../assets/icons/dropIcon.svg";
import search from "../../assets/icons/search.svg";
import Header from "../../components/Header/Header";
import UserRow from "../../components/UserRow/UserRow";
import UsersModal from "../../components/UsersModal/UsersModal";
import Loading from "../../components/Loading/Loading";
import { getUsers } from "../../redux/actions/userAction";
import { Styles } from "./HomePage.styled";
import { refreshToken } from "../../redux/actions/authAction";
import ReactModal from "react-modal";

const HomePage = () => {
  const dispatch = useDispatch();
  const [drop, setDrop] = useState(false);
  const [modal, setModal] = useState(null);
  const [chosen, setChosen] = useState(0);
  const [select, setSelect] = useState("Ташкилот номи");
  const [searchValue, setSearchValue] = useState("");
  const [userMenu, setUserMenu] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleDrop = () => setDrop(!drop);

  const closeModal = () => {
    setModal(null);
    setMenu(false);
  };

  const handleSelect = (arg) => {
    setSelect(arg);
    setDrop(false);
  };

  const createUser = useCallback(() => {
    setModal("CREATE");
    setChosen(0);
    setMenu(false);
  }, []);

  const editUser = useCallback(({ id }) => {
    setModal("UPDATE");
    setChosen(id);
    setMenu(false);
    setUserMenu(0);
  }, []);

  const { user, loading } = useSelector((state) => state.user);
  const { token, access, response } = useSelector((state) => state.auth);

  const chosenData = useMemo(() => {
    if (!chosen || !user) return null;
    return user?.results?.find((el) => el.id === chosen);
  }, [chosen, user]);

  const params = {
    organization: "",
    search: searchValue,
    limit: 10,
    offset: 0,
  };

  const handleSearch = () => {
    dispatch(getUsers(params, access?.data?.access));
  };

  const handleUserMenu = (id) => {
    setMenu(true);
    setUserMenu(id);
  };

  useEffect(() => {
    dispatch(getUsers(params, access?.data?.access));
  }, [access]);

  useEffect(() => {
    dispatch(refreshToken({ refresh: token }));
  }, [token]);

  if (!user || !token || !access || !response) return null;
  if (loading) return <Loading />;

  return (
    <>
      <ReactModal
        isOpen={modal}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {modal === "CREATE" && (
          <UsersModal close={closeModal} onFocus={() => setMenu(false)} />
        )}
        {modal === "UPDATE" && (
          <UsersModal
            updateData={chosenData}
            close={closeModal}
            onFocus={() => setMenu(false)}
          />
        )}
      </ReactModal>

      <Header
        title="Фойдаланувчилар"
        userName="FullName"
        role={response?.role}
      />
      <Styles.Root>
        <div className="home-wrapper">
          <div className="between-block">
            <div className="row-block">
              <div className="search-wrap">
                <img src={search} alt="search" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button onClick={handleSearch}>Қидириш</button>
              </div>
              <div className="select-block" onClick={handleDrop}>
                <h1>{select ? select : "Ташкилот номи"}</h1>
                <div
                  style={{
                    transform: drop ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <img src={dropIcon} alt="dropIcon" />
                </div>
                {drop && (
                  <div className="select-items_wrap">
                    {user.results?.map((el) => (
                      <div
                        className="select-item"
                        onClick={() => handleSelect(el.organization?.name_cyr)}
                        key={el.id}
                      >
                        <h1>
                          {el.organization?.name_cyr
                            ? el.organization?.name_cyr
                            : "Ташкилот номи"}
                        </h1>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button className="create-user-btn" onClick={createUser}>
              <img src={createUserIcon} alt="createUserIcon" />
              <h1>Фойдаланувчи яратиш</h1>
            </button>
          </div>
          <div className="head-cell_wrap">
            <div className="head-cell_item">
              <div className="empty" />
              <span>Фойдаланувчи номи</span>
            </div>
            <div className="head-cell_item">
              <span>Ташкилот номи</span>
            </div>
            <div className="head-cell_item" />
          </div>
          {user.results?.map((el, index) => (
            <UserRow
              key={el.id}
              editUser={() => editUser(el)}
              count={index + 1}
              userName={el.login_name}
              userMenu={userMenu === el.id && menu}
              onClick={() => handleUserMenu(el.id)}
              clickOutside={() => setMenu(false)}
              orgName={
                el.organization?.name_cyr
                  ? el.organization?.name_cyr
                  : "Мавжуд эмас!"
              }
            />
          ))}
        </div>
      </Styles.Root>
    </>
  );
};

export default HomePage;
