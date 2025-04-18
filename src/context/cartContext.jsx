import { createContext, useEffect, useState } from "react"

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	)

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemRemove.id
	)

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemRemove.id)
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemRemove.id
		? { ...cartItem, quantity: cartItem.quantity -1 }
		: cartItem
	)
}

const clearCartItem = (cartItems, cartItemToClear) =>
	 cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemToCart: () => {},
	clearItemToCart: () => {},
	cartCount: 0,
	cartTotal: 0
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [cartCount, setCartCount] = useState(0)
	const [cartTotal, setCartTotal] = useState(0)

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		)
		setCartCount(newCartCount)
	}, [cartItems])

	useEffect(() => {
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		)
		setCartTotal(newCartTotal)
	}, [cartItems])

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd))
	}

	const removeItemToCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove))
	}

	const clearItemToCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear))
	}

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemToCart,
		clearItemToCart,
		cartItems,
		cartCount,
		cartTotal
 }

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}