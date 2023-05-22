import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

//import logoImg from '../../assets/Logo.png';
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from './styles';

export function Header({ setMenuIsVisible }) {
	let logoImg = 'CLOUD';
	return (
		<Container>
			<section>
				{/*
      <img src={logoImg} alt="Logo" />
      */}
				<h1>{logoImg}</h1>

				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/produtos#">Produtos</NavLink>
					<NavLink to="/sobre">Sobre nós</NavLink>
					<NavLink to="/contato">Contato</NavLink>
				</nav>
			</section>

			<section>
				<FaSearch />
				<FaShoppingBag />
				<RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile" />
			</section>
		</Container>
	);
}
