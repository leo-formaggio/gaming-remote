import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: "Roboto", serif;
	}

	body {
		background-color: #335060;
	}

	a {
		text-decoration: none;
		color: #000;
	}
`