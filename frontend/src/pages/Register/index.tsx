import { WithLayout } from "layout";
import { RegisterContainer } from "containers";

const Register: React.FC = () => {
  return <RegisterContainer />;
};

export const RegisterPage = WithLayout(Register);
