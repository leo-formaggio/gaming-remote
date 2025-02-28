import { useEffect, useState } from 'react'
import ShopIcon from '../../assets/img/shopping-cart.svg'
import './style.css'

export function CartIcon() {
	return (
		<>
			<div className='shopping-container'>
				<div className='image-icon'>
					<img src={ShopIcon} />
				</div>
				<div className='button-item'>
					<span>0</span>
					<button>Adicionar Item</button>
				</div>
			</div>
		</>
	)
}