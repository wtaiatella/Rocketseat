import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <div>
      <SearchFormContainer>
        <input type="text" placeholder="busque por transações" />
        <button type="submit">
          <MagnifyingGlass size={24} />
          Buscar
        </button>
      </SearchFormContainer>
    </div>
  );
}
