import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/Navigation'
import { Auth } from './pages/auth'
import { Home } from './pages/home'
import { Shop } from './pages/Shop'
import { useEffect } from 'react'
import { addCollectionAndDocuments } from './utils/firebase'
import { SHOP_DATA } from '../shop-data.js'
import { Checkout } from './pages/checkout/index.jsx'

export function App() {

	useEffect(() => {
		addCollectionAndDocuments('categories', SHOP_DATA);
	}, []);

  return (
		<Routes>
			<Route path='/' element={<NavBar />} >
				<Route index element={<Home />} />
				<Route path='auth' element={<Auth />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	)
}