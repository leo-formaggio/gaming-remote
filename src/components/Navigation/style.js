import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary};

	div {

	}

	h1 {
		color: ${(props) => props.theme.colors.gray};
	}

	img {
		width: 80px;
	}
`

	export const LogoContainer = styled(Link)`
		display: flex;
		align-items: center;
		gap: 15px;
	`

export const LinkNavigation = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 50px;

	a {
		cursor: pointer;
	}
`

export const CartIcon = styled.div`
	width: 30px;
`