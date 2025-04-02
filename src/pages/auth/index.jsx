import { SignIn } from "../../components/SignIn"
import { SignUp } from "../../components/SignUp"
import './style.css'

export function Auth() {
	return (
		<div className="image-container">
			<div className="auth-container">
				<SignUp />
				<SignIn />
			</div>
		</div>
	)
}