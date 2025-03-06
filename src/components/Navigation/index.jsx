import * as Style from './style'
import IMGLogo from '../../assets/img/logo for Gaming Remote brand with elements of a video game controller and antenna or satellite.png'
import { Link, Outlet } from 'react-router-dom'
import { CartIcon } from '../CartIcon'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { singOutAuthUser } from '../../utils/firebase'
import { CartContext } from '../../context/cartContext'
import { CartDropdown } from '../CartDropDown'

export function NavBar() {

	const { isCartOpen } = useContext(CartContext)

	const { currentUser } = useContext(UserContext)

	return (
		<>
			<Style.NavBar>
				<Style.LogoContainer to="/">
					<img src={IMGLogo} />
					<h1>Gaming Remote</h1>
				</Style.LogoContainer>
				<Style.LinkNavigation>
					<Link to="shop">SHOP</Link>
					{currentUser ? ( <Link onClick={singOutAuthUser}>LOGOUT</Link> ) : ( <Link to="auth">LOGIN</Link> )}
				</Style.LinkNavigation>
				<div>
					<CartIcon />
					{ isCartOpen && <CartDropdown /> }
				</div>
			</Style.NavBar>
			<Outlet />
		</>
	)
}