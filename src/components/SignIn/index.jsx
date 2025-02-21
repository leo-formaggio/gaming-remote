import { useState } from 'react'
import { FormInput } from '../UI/FormInput/index'
import './style.css'

const defaultFormFields = {
	email:'',
	password:''
}

export function SignIn() {

	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFields({ ...formFields, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		resetFormFields()
	}

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	return (
		<div className='sign-in-container'>
			<h2>Já possui conta?</h2>
			<span>Faça o login utilizando seu e-mail e senha</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="E-mail"
					type="email"
					placeholder="Digite seu e-mail"
					requerid
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<FormInput
					label="Senha"
					type="password"
					placeholder="Digite uma senha"
					requerid
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<div className='buttons-container-sign-in'>
					<button className='button-login' type='submit'>Login</button>
					<button className='button-login-google'>Login com Google</button>
				</div>
			</form>
		</div>
	)
}