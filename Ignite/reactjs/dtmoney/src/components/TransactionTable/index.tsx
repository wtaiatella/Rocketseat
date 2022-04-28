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
						<tr>
							<td>transaction.title</td>
							<td className='deposit'>'R$400'</td>
							<td>'Casa'</td>
							<td>'2022-04-27'</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
