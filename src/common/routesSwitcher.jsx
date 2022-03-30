import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import notFound from "../assets/icons/404.svg";
import error from "../assets/icons/error.svg";

const RoutesSwitcher = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.auth} element={<AuthPage />} />
        <Route path={paths.home} element={<HomePage />} />
        <Route
          path={paths.notFound}
          element={
            <ErrorPage
              title="404 - саҳифа топилмади"
              subtitle="Ушбу саҳифадаги маълумотлар топилмади, Интернет йоки бошқа сабабларга кўра веб-саҳифа топилмади."
              image={notFound}
              onBack={() => window.history.back(1)}
            />
          }
        />
        <Route
          path={paths.error}
          element={
            <ErrorPage
              headerShown
              title="Тақиқланган"
              subtitle="Сизда тизимга киришга ҳуқуқ ёқ"
              image={error}
              onBack={() => window.location.replace(paths.auth)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitcher;
