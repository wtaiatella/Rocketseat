import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoIgnite from "../../assets/logo-ignite.svg";
import { HeaderContainer } from "./styles";

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink title="Timer" to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink title="History" to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
