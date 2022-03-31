import React from "react";
import { Styles } from "./UsersModal.styled";
import done from "../../assets/icons/done.svg";
import { yup } from "../../common/yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../../redux/actions/userAction";
import success from "../../assets/icons/success.svg";
import { refreshToken } from "../../redux/actions/authAction";

const defaultValues = {
  login_name: "",
  password: "",
};

const schema = yup.object().shape({
  login_name: yup
    .string()
    .required("Логинни киритинг")
    .min(2, "Логин узунлиги 8 ва 25 орасида бўлиши керак!")
    .max(25, "Логин узунлиги 8 ва 25 орасида бўлиши керак!"),
  password: yup
    .string()
    .required("Паролни киритинг")
    .min(8, "Парол узунлиги 8 ва 25 орасида бўлиши керак!")
    .max(25, "Парол узунлиги 8 ва 25 орасида бўлиши керак!"),
});

const UsersModal = ({ updateData, onFocus }) => {
  const dispatch = useDispatch();
  const { access, token } = useSelector((state) => state.auth);
  const { loading, createResponse, updateResponse } = useSelector(
    (state) => state.user
  );
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: updateData ? updateData : defaultValues,
  });

  const createNewUser = handleSubmit((data) => {
    const body = {
      login_name: data.login_name,
      password: data.password,
      organization: 10,
      role: 3,
    };
    if (updateData) {
      dispatch(
        updateUser(updateData?.id, data, access?.data?.access),
        refreshToken({ refresh: token })
      );
    } else {
      dispatch(createUser(body, access?.data?.access));
    }
  });
  if (createResponse || updateResponse) {
    setTimeout(() => window.location.reload(), 5000);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <Styles.Root>
      {createResponse || updateResponse ? (
        <div className="success-info">
          <img src={success} alt="success" />
          <h1>Маълумотлар қониқарли сақланди</h1>
        </div>
      ) : (
        <form className="modal-wrap" onSubmit={createNewUser}>
          <h1>Янги фойдаланувчи яратиш</h1>
          <div className="modal-input_wrap">
            <span>Логин</span>
            <Controller
              name="login_name"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  value={value}
                  onChange={onChange}
                  onFocus={onFocus}
                />
              )}
            />
            <p>
              {Boolean(errors.login_name?.message) &&
                errors.login_name?.message}
            </p>
          </div>
          <div className="modal-input_wrap">
            <span>Пароль</span>
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  value={value}
                  onChange={onChange}
                  onFocus={onFocus}
                />
              )}
            />
            <p>
              {Boolean(errors.password?.message) && errors.password?.message}
            </p>
          </div>
          <div className="btn-wrap">
            <button type="submit">
              <img src={done} alt="done" />
              <span>Сақлаш</span>
            </button>
          </div>
        </form>
      )}
    </Styles.Root>
  );
};

export default UsersModal;
