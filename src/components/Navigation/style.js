import styled from 'styled-components'

export const NavBar = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin: 50px auto;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary};

	h1 {
		color: ${(props) => props.theme.colors.gray};
	}

	img {
		width: 80px;
	}

	.shopping-cart {
		width: 40px;
		cursor: pointer;
	}
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