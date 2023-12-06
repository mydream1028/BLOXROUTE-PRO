import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PATH } from "const";
import { RootState, useAppSelector, AppActions, AppDispatch } from "store";

import {
  HeaderButton,
  HeaderLink,
  StyledHeader,
  StyledLogo,
  StyledNav,
} from "./style";

export const Header: React.FC = () => {
  const auth = useAppSelector((store: RootState) => store.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(
      AppActions.auth.logoutRequest({
        next: () => navigate(PATH.HOME),
      })
    );
  };

  useEffect(() => {
    if (localStorage.getItem("access_token"))
      dispatch(AppActions.auth.getUserRequest());
  }, []);

  return (
    <StyledHeader>
      <StyledLogo>
        <HeaderLink to={PATH.HOME} cy-data-id="home-link">
          BLOXROUTE
        </HeaderLink>
        {auth.isAuth ? (
          <HeaderLink to={PATH.CREATE} cy-data-id="create-post-link">
            Create Blog
          </HeaderLink>
        ) : null}
      </StyledLogo>
      <StyledNav>
        {auth.isAuth ? (
          <HeaderButton onClick={logout}>
            {auth.user?.username} Logout
          </HeaderButton>
        ) : (
          <>
            <HeaderLink to={PATH.LOGIN}>Login</HeaderLink>
            <HeaderLink to={PATH.REGISTER}>Register</HeaderLink>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};
