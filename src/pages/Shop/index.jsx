import { Route, Routes } from 'react-router-dom'
import { CategoriesPreview } from '../../components/CategoriesPreview'

export function Shop() {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
		</Routes>
	)
}