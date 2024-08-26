import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header></Header>
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">
                <p>Desenvolvimento de website</p>
              </td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td width="50%">
                <p>Hamburguer</p>
              </td>
              <td>
                <PriceHighlight variant="outcome">- R$ 50,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>21/02/2021</td>
            </tr>
            <tr>
              <td width="50%">
                <p>Aluguel</p>
              </td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.200,00</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>21/02/2021</td>
            </tr>
            <tr>
              <td width="50%">
                <p>Computador</p>
              </td>
              <td>
                <PriceHighlight variant="income">R$ 5.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>22/02/2021</td>
            </tr>
            <tr>
              <td width="50%">
                <p>Monitor</p>
              </td>
              <td>
                <PriceHighlight variant="income">R$ 1.200,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>22/02/2021</td>
            </tr>
            <tr>
              <td width="50%">
                <p>Mouse</p>
              </td>
              <td>
                <PriceHighlight variant="income">R$ 200,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>22/02/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
