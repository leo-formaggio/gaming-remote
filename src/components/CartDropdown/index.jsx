import { CartItem } from '../CartItem/index'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import './style.css'
import { useNavigate } from 'react-router-dom'

export function CartDropdown() {

	const { cartItems } = useContext(CartContext)

	const navigate = useNavigate()

	const goToCheckout = () => {
		navigate('/checkout')
	}

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem item={item} key={item.id} />
				))}
			</div>
			<button onClick={goToCheckout}>Go to Checkout</button>
		</div>
	)
}