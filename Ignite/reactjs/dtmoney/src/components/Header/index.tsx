import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface headerProps {
	onOpenNewTransaction: () => void;
}

export function Header({ onOpenNewTransaction }: headerProps) {
	return (
		<Container>
			<Content>
				<img src={logoImg} alt='dt money' />
				<button type='button' onClick={onOpenNewTransaction}>
					{' '}
					New Transaction{' '}
				</button>
			</Content>
		</Container>
	);
}
