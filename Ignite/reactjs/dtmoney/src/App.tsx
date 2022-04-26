import { Dashboard } from './components/Dashboard/Index';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTrasactionModal } from './components/TransactionModal';
import Modal from 'react-modal';

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
		<>
			<Header onOpenNewTransaction={handleOpenNewTransactionModal} />
			<Dashboard />

			<NewTrasactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>

			<GlobalStyle />
		</>
	);
}
