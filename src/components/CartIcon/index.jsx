import { useContext, useEffect } from 'react'
import ShopIcon from '../../assets/img/shopping-cart.svg'
import './style.css'
import { CartContext } from '../../context/cartContext'

export function CartIcon() {

	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

	const toogleCartOpen = () => setIsCartOpen(!isCartOpen)

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (isCartOpen && !event.target.closest('.cart-icon-container')) {
				setIsCartOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isCartOpen, setIsCartOpen])

	return (
		<>
			<div className='cart-icon-container' onClick={toogleCartOpen}>
					<img className='shopping-icon' src={ShopIcon} />
					<span className='item-count'>{cartCount}</span>
			</div>
		</>
	)
}