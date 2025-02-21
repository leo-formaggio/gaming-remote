import { useState } from 'react'
import ShopIcon from '../../assets/img/shopping-cart.svg'
import './style.css'

export function CartIcon() {

	const [CartCount, setCartCount] = useState(0)

	const plusCart = () => {
		setCartCount((prevCont) => prevCont + 1)
	}

	const minusCart = () => {
		setCartCount((prevCont) => prevCont - 1)
	}

	return (
		<>
			<div className='shopping-container'>
				<div className='image-icon'>
					<img src={ShopIcon} />
				</div>
				<div className='button-item'>
					<button onClick={minusCart}>-</button>
					<span>{CartCount}</span>
					<button onClick={plusCart}>+</button>
				</div>
			</div>
		</>
	)
}