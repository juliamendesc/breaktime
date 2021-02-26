import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
	const { level } = useContext(ChallengesContext);
	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/juliamendesc.png" alt ="Julia Carvalho" />
			<div>
				<strong>Julia Carvalho</strong>
				<p>
					<img src="icons/level.svg" alt="level" />
					Level {level}
				</p>
			</div>
		</div>
	);
}
