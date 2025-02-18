import { Categories } from './components/Categories'
import { NavBar } from './components/Navigation'
import { Auth } from './pages/auth'

export function App() {
  return (
		<>
			<NavBar />
			<Auth />
			{/*<Categories />*/}
		</>
	)
}