import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/Navigation'
import { Auth } from './pages/auth'
import { Home } from './pages/home'
import { Shop } from './pages/Shop'

export function App() {
  return (
		<Routes>
			<Route path='/' element={<NavBar />} >
				<Route index element={<Home />} />
				<Route path='auth' element={<Auth />} />
				<Route path='shop/*' element={<Shop />} />
			</Route>
		</Routes>
	)
}