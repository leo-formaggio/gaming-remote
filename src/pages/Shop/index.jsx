import { Route, Routes } from 'react-router-dom'
import { CategoriesPreview } from '../../components/CategoriesPreview'
import { CategoryShop } from '../../components/categoryShop'

export function Shop() {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<CategoryShop />} />
		</Routes>
	)
}