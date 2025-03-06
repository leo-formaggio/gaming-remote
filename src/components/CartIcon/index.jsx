import { useContext } from 'react'
import ShopIcon from '../../assets/img/shopping-cart.svg'
import './style.css'
import { CartContext } from '../../context/cartContext'

export function CartIcon() {

	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

	const toogleCartOpen = () => setIsCartOpen(!isCartOpen)

	return (
		<>
			<div className='cart-icon-container' onClick={toogleCartOpen}>
					<img className='shopping-icon' src={ShopIcon} />
					<span className='item-count'>{cartCount}</span>

			</div>
		</>
	)
}