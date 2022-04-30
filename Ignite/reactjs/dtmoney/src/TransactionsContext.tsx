import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string; // aqui o correto é createdAt
}

// Duas maneiras para tipificar a TransactionInput

//a normal, declarando os itens indivuiduais
/* interface TransactionInput {
	title: string;
	amount: number;
	type: string;
	category: string;
} */

//ou aproveitando a Transaction e omitindo as propriedades não necessaŕias
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
	children: ReactNode;
}

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('/transactions').then((response) => {
			console.log(
				'data para mostrar no dashboard: ',
				response.data.transactions
			);
			setTransactions(response.data.transactions);
		});
	}, []);

	async function createTransaction(transaction: TransactionInput) {
		await api.post('/transactions', transaction);
	}

	return (
		<TransactionContext.Provider
			value={{ transactions, createTransaction }}
		>
			{children}
		</TransactionContext.Provider>
	);
}
