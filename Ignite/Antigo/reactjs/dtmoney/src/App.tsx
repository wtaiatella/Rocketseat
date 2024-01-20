import { Dashboard } from './components/Dashboard/Index';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTrasactionModal } from './components/TransactionModal';
import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<TransactionsProvider>
			<Header onOpenNewTransaction={handleOpenNewTransactionModal} />
			<Dashboard />

			<NewTrasactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>

			<GlobalStyle />
		</TransactionsProvider>
	);
}
