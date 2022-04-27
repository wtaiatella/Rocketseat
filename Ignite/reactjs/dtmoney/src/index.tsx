import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
	//It's possible to have a data base using models from mirage
	models: {
		//declare the data base name:
		transaction: Model,
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			//use this.schema.all to get data from 'transaction'
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);

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
