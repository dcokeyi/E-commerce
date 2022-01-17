import { useState } from "react";

const useFormState = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            console.log(inputs)
        }
    }

    const handleInputChange = e => {
        e.persist();
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useFormState;