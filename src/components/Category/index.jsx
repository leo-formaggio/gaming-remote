import * as Style from './style'
import { Link } from 'react-router-dom'

export function Category({ category }) {
	const { title, imageUrl } = category

	return (
		<Style.CategoryContainer>
			<Style.ImageBackground style={{ backgroundImage: `url(${imageUrl})` }} />
			<Style.CategoryContent>
				<h2>{title}</h2>
				<Link to="shop">Ver mais</Link>
			</Style.CategoryContent>
		</Style.CategoryContainer>
	)
}