import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTrasactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState('deposit');

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();
		const createAt = new Date();

		const data = { title, category, amount, type, createAt };

		console.log('data do form: ', data);
		api.post('/transactions', data);
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<button
				type='button'
				onClick={onRequestClose}
				className='react-modal-close'
			>
				<img src={closeImg} alt='Close modal' />
			</button>

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar Transação</h2>

				<input
					placeholder='Title'
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>

				<input
					type='number'
					placeholder='Value'
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
				/>

				<TransactionTypeContainer>
					<RadioBox
						type='button'
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						activeColor='green'
					>
						<img src={incomeImg} alt='Income' />
						<span>Income</span>
					</RadioBox>

					<RadioBox
						type='button'
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
						activeColor='red'
					>
						<img src={outcomeImg} alt='Outcome' />
						<span>Outcome</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input
					type='text'
					placeholder='Category'
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>

				<button type='submit'>Register</button>
			</Container>
		</Modal>
	);
}
