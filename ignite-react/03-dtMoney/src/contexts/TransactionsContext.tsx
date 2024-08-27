import { createContext, ReactNode, useEffect, useState } from "react";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionsContext {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContext);

export function TransactionsProvider({
  children,
}: TransactionsProviderProps): JSX.Element {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    setTransactions(data);
    console.log(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
