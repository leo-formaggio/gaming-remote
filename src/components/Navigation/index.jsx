import * as Style from './style'
import IMGLogo from '../../assets/img/logo for Gaming Remote brand with elements of a video game controller and antenna or satellite.png'
import shoppingCart from '../../assets/img/shopping-cart.svg'
import { toast } from 'react-toastify'

export function NavBar() {
	return (

			<Style.NavBar>
					<img src={IMGLogo} />
					<h1>Gaming Remote</h1>
				<Style.LinkNavigation>
					<a>SHOP</a>
					<a>LOGIN</a>
				</Style.LinkNavigation>
				<div>
					<img onClick={ItemListContainer} className='shopping-cart' src={shoppingCart} />
				</div>
			</Style.NavBar>
	)
}

function ItemListContainer() {
	return toast.warn("Confira nossas ofertas!")
}

ItemListContainer()