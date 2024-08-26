import logoDtMoney from "../../assets/logo-dtMoney.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDtMoney} alt="" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
