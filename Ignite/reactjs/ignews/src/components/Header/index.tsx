/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { SingInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<Image
					src='/images/logo.svg'
					alt='logo ig.news'
					width='110'
					height='31'
				/>

				<nav>
					<a className={styles.active}>Home</a>
					<a>Posts</a>
				</nav>

				<SingInButton />
			</div>
		</header>
	);
}
