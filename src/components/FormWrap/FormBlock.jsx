import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import line from "../../assets/icons/line.svg";
import ShowPassword from "../../assets/icons/ShowPassword";
import uzbMap from "../../assets/images/uzbMap.svg";
import { yup } from "../../common/yup";
import { Styles } from "./FormBlock.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../redux/actions/authAction";
import Loading from "../Loading/Loading";

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

const FormBlock = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);

  const { loading } = useSelector((state) => state.auth);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues });

  const getToken = handleSubmit((data) => {
    dispatch(getAuth(data));
  });

  if (loading) return <Loading />;

  return (
    <Styles.Root>
      <div className="form-wrap">
        <form className="form-block" onSubmit={getToken}>
          <div className="line">
            <img src={line} alt="line" width="100%" height="100%" />
          </div>
          <h1>Кириш</h1>
          <p>Давом эттириш учун, киринг</p>
          <div className="input-wrap">
            <div className="login-icon" />
            <Controller
              name="login_name"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  value={value}
                  onChange={onChange}
                  placeholder="Логин"
                />
              )}
            />
          </div>
          <span>
            {Boolean(errors.login_name?.message) && errors.login_name?.message}
          </span>
          <div className="input-wrap" style={{ alignItems: "center" }}>
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="Пароль"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <div className="show-password" onClick={handleShowPassword}>
              <ShowPassword show={showPassword} />
            </div>
          </div>
          <span>
            {Boolean(errors.password?.message) && errors.password?.message}
          </span>
          <button type="submit">Кириш</button>
        </form>
        <div className="map-block">
          <img src={uzbMap} alt="uzbMap" width="100%" height="100%" />
        </div>
      </div>
    </Styles.Root>
  );
};

export default FormBlock;
