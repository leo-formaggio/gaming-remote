import { useState } from "react"
import { toast } from "react-toastify"
import { FormInput } from "../UI/FormInput"

const defaultFormFields ={
	name:'',
	email:'',
	password:'',
	confirmPassword:''
}

export function SignUp() {


	const [formFields, setFormFields] = useState(defaultFormFields)
	const { name, email, password, confirmPassword } = formFields

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFields({ ...formFields, [name]: value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			toast.warn('As senhas não são iguais!')
		}

		setFormFields(defaultFormFields)
	}

	return (
		<>
			<h2>Não possui conta?</h2>

			<form onSubmit={handleSubmit}>

				<FormInput
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					value={name}
					name="name"
					onChange={handleChange}
					/>
				<input
					type="email"
					placeholder="Digite seu e-mail"
					value={email}
					name="email"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Digite uma senha"
					value={password}
					name="password"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Confirme sua senha"
					value={confirmPassword}
					name="confirmPassword"
					onChange={handleChange}
				/>
				<button type="submit">Criar Conta</button>
			</form>
		</>
	)
}