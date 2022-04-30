import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
	//It's possible to have a data base using models from mirage
	models: {
		//declare the table name:
		transaction: Model,
	},

	//Add some initial data to '/transactions' path.
	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelance on website',
					type: 'deposit',
					category: 'dev',
					amount: 6000,
					createdAt: new Date('2022-04-24 18:36:00'),
				},
			],
		});
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			//use this.schema.all to get data from 'transaction'
			console.log(this.schema.all('transaction'));
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);
			console.log('dados do POST ', data);
			//use schema.create to add data in mirage data base 'transaction'
			return schema.create('transaction', data);
		});
	},
});
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
