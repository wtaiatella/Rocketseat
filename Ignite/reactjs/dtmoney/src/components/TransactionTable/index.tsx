import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styled';

export function TransactionTable() {
	useEffect(() => {
		api.get('/transactions').then((response) => console.log(response.data));
	});

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
					<tr>
						<td>Website development</td>
						<td className='deposit'>R$12.000</td>
						<td>Development</td>
						<td>20/02/2022</td>
					</tr>
					<tr>
						<td>Rent</td>
						<td className='withdrawn'>- R$1.000</td>
						<td>House</td>
						<td>17/02/2022</td>
					</tr>
					<tr>
						<td>Website development</td>
						<td className='deposit'>R$12.000</td>
						<td>Development</td>
						<td>20/02/2022</td>
					</tr>
					<tr>
						<td>Website development</td>
						<td className='deposit'>R$12.000</td>
						<td>Development</td>
						<td>20/02/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
