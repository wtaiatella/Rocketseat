import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";
import { useSummary } from "../../hooks/useSummary";
import { currencyFormatter } from "../../utils/DataFormatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={24} color="#00b37e" />
        </header>
        <strong>{currencyFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={24} color="#f75a68" />
        </header>
        <strong>{currencyFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="total">
        <header>
          <span>Total</span>
          <CurrencyDollar size={24} color="#ffffff" />
        </header>
        <strong>{currencyFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
