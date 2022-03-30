import { useNavigate } from "react-router-dom";

export const useHandleRedirect = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return handleRedirect;
};
