import { Navigate } from "react-router-dom";
import { RootState, useAppSelector } from "store";
import { PATH } from "const";

interface PrivateRouteProps {
  Element: React.FC;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ Element }) => {
  const isAuth = useAppSelector((store: RootState) => store.auth.isAuth);
  return isAuth ? <Element /> : <Navigate to={PATH.HOME} />;
};
