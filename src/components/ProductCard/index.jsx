import { Button } from '../UI/Button'
import './style.css'

export function ProductCard({ product }) {
	const { name, price, imageUrl } = product

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button typeButton="inverted">Adicionar ao carrinho</Button>
		</div>
	)
}