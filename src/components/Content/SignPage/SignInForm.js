import useFormState from "../../../Hooks/useFormState";
import CustomButton from "../../Layout/CustomButton/Button";
import FormInput from "../../Layout/FormInput/FormInput";

import './SignInForm.scss'

const SignInForm = () => {
    const { inputs, handleInputChange, handleSubmit } = useFormState();

    return <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
                type='email'
                value={inputs.email || ""}
                name="email" 
                label='Email'
                handleChange={handleInputChange}
                required
            />
            <FormInput
                type='password'
                value={inputs.password || ""}
                name="password" 
                label='Password'
                handleChange={handleInputChange}
                required />
            <CustomButton
                type="submit"
                value='Submit Form'>
                Sign In
            </CustomButton>
        </form>
    </div>
}

export default SignInForm;