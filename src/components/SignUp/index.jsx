import { useState } from "react"
import { toast } from "react-toastify"
import { FormInput } from "../UI/FormInput"
import './style.css'
import {
	createAuthUserWithEmailPassword,
	createUserDocumentFromAuth
} from "../../utils/firebase"

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

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			toast.warn('As senhas não são iguais!')
			return
		}

		try {
			const { user } = await createAuthUserWithEmailPassword(email, password)
			await createUserDocumentFromAuth(user, { name })
			toast.success('Usuário cadastrado com sucesso!')
			setFormFields(defaultFormFields)
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				toast.error('E-mail já cadastrado!')
			}
		}

	}

	return (
		<div className='sign-up-container'>
			<h2>Não possui conta?</h2>
			<span>Crie sua conta utilizando seu e-mail e senha</span>
			<form onSubmit={handleSubmit}>

				<FormInput
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					value={name}
					name="name"
					onChange={handleChange}
					/>
				<FormInput
					label="E-mail"
					type="email"
					placeholder="Digite seu e-mail"
					value={email}
					name="email"
					onChange={handleChange}
					/>
				<FormInput
					label="Senha"
					type="password"
					placeholder="Digite uma senha"
					value={password}
					name="password"
					onChange={handleChange}
				/>
				<FormInput
					label="Confirme sua senha"
					type="password"
					placeholder="Confirme sua senha"
					value={confirmPassword}
					name="confirmPassword"
					onChange={handleChange}
				/>
				<button className="button-login" type="submit">
					Criar Conta
				</button>
			</form>
		</div>
	)
}