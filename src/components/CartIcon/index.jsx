import ShopIcon from '../../assets/img/shopping-cart.svg'
import './style.css'

export function CartIcon() {
	return (
		<>
			<div className='shopping-container'>
					<img src={ShopIcon} />
					<span>{0}</span>
					<button>Adicionar Item</button>
			</div>
		</>
	)
}