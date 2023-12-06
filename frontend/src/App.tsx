import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { CreatePage, HomePage, LoginPage, RegisterPage } from "pages";
import { PATH } from "const";
import { store } from "store";
import { theme } from "assets/theme";
import { ThemeProvider } from "styled-components";
import { PrivateRoute } from "components";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={PATH.HOME} element={<HomePage />} />
            <Route
              path={PATH.CREATE}
              element={<PrivateRoute Element={CreatePage} />}
            />
            <Route path={PATH.LOGIN} element={<LoginPage />} />
            <Route path={PATH.REGISTER} element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;