import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createAt: string; // aqui o correto é createdAt
}

export function TransactionTable() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('/transactions').then((response) => {
			console.log(response.data.transactions);
			setTransactions(response.data.transactions);
		});
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Value</th>
						<th>Category</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>
								R${transaction.amount}
							</td>
							<td>{transaction.category}</td>
							<td>{transaction.createAt}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
