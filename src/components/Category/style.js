import styled from 'styled-components'

export const CategoryContainer = styled.div`
	width: 300px;
	height: 450px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px auto;

	&:hover {
		cursor: pointer;
	}
`

export const ImageBackgroud = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	transition: transform 0.7s;

	&:hover {
		transform: scale(1.1);
		transition: transform 0.7s;
	}
`

export const CategoryContent = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid ${(props) => props.theme.colors.black};
	background-color: ${(props) => props.theme.colors.white};
	opacity: 0.6;
	position: absolute;

	&:hover {
		transform: scale(1.1);
		transition: transform 0.7s;
	}

	h2 {
		font-weight: bold;
		margin: 0 6px 0;
		font-size: 22px;
		color: ${(props) => props.theme.colors.gray};
	}

	p {
		font-weight: lighter;
		font-size: 16px;
	}
`