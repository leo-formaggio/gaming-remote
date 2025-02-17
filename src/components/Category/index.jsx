import * as Style from './style'

export function Category({ category }) {
	const { title, imageUrl } = category

	return (
		<Style.CategoryContainer>
			<Style.ImageBackgroud style={{ backgroundImage: `url(${imageUrl})` }} />
			<Style.CategoryContent>
				<h2>{title}</h2>
				<p>Ver mais</p>
			</Style.CategoryContent>
		</Style.CategoryContainer>
	)
}