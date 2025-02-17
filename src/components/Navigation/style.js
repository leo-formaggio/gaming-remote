import styled from 'styled-components'

export const NavBar = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 25px;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary};

	h1 {
		color: ${(props) => props.theme.colors.gray};
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