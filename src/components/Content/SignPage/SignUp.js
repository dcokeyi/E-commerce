import useFormState from "../../../Hooks/useFormState"
import CustomButton from "../../Layout/CustomButton/Button";
import FormInput from "../../Layout/FormInput/FormInput";

import './sign-up.styles.scss'

const SignUpForm = () => {
    const { inputs, handleInputChange, handleSubmit } = useFormState();

    return <div className="sign-up">
        <h2 className="title"> I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form>
            <FormInput
                type='text'
                value={inputs.displayName || ""}
                name="email"
                label="Email"
                handleChange={handleInputChange}
                required
            />
            <FormInput
                type="email"
                value={inputs.email || ""}
                name="email"
                label="Email"
                handleChange={handleInputChange}
                required
            />
            <FormInput
                type="password"
                value={inputs.password || ""}
                name="password"
                label="Password"
                handleChange={handleInputChange}
                required
            />
            <FormInput
                type='password'
                value={inputs.ConfirmpPassword || ""}
                name="password"
                label="Password"
                handleChange={handleInputChange}
                required
            />
            <CustomButton
                type="submit"
                value="Submit Form">
                Sign Up
            </CustomButton>
        </form>
    </div>
}

export default SignUpForm;