import { Header } from "./Header";
import { Page } from "./style";

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Page>
      <Header />
      <Page>{children}</Page>
    </Page>
  );
};

export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  );
};
