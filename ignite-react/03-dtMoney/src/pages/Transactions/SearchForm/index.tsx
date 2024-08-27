import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import * as z from "zod";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormData = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(SearchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormData) {
    //simular uma query mais demorada
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);

    await fetchTransactions(data.query);
  }

  return (
    <div>
      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input
          type="text"
          placeholder="busque por transações"
          //nome do campo neste caso é query, poderia ser qualquer outro nome
          {...register("query")}
        />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={24} />
          Buscar
        </button>
      </SearchFormContainer>
    </div>
  );
}
