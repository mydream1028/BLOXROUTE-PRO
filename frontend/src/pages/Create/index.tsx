import { WithLayout } from "layout";
import { CreateContainer } from "containers";

const Create: React.FC = () => {
  return <CreateContainer />;
};

export const CreatePage = WithLayout(Create);
