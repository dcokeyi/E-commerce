import SignInForm from "./SignInForm";
import SignUpForm from "./SignUp";

import './sign-in-and-sign-up.styles.scss'

const SignIn = () => {
    return <div className="sign-in-and-sign-up">
        <SignInForm />
        <SignUpForm/>
    </div>
}

export default SignIn;