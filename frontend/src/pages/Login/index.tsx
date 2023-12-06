import { WithLayout } from "layout";
import { LoginContainer } from "containers";

const Login: React.FC = () => {
  return <LoginContainer />;
};

export const LoginPage = WithLayout(Login);
