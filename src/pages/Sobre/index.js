import { useState } from 'react';

import { Header } from '../../components/Header';
import { MenuMobile } from '../../components/MenuMobile';
import { HomeContainer } from '../../styles/pages/HomeStyles';

export function Sobre() {
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	return (
		<>
			<MenuMobile
				menuIsVisible={menuIsVisible}
				setMenuIsVisible={setMenuIsVisible}
			/>
			<HomeContainer>
				<Header setMenuIsVisible={setMenuIsVisible} />
				<h1>Sobre</h1>
			</HomeContainer>
		</>
	);
}
