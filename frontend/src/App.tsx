import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { HomePage } from "pages";
import { PATH } from "const";
import { store } from "store";
import { theme } from "assets/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={PATH.HOME} element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;