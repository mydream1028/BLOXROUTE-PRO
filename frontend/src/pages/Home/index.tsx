import { WithLayout } from "layout";
import { HomeContainer } from "containers/Home";

const Home: React.FC = () => {
  return <HomeContainer />;
};

export const HomePage = WithLayout(Home);
