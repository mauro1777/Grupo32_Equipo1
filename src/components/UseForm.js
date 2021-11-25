import { useState, setState } from "react";

export const UseForm = (initialForm, validateForm) => {
    const [form, setForm] = setState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => { };
    const handleBlur = (e) => { };
    const handleSubmit = (e) => { };

    return {
        form, errors, loading, response, handleChange, handleBlur, handleSubmit
    }
};

export default UseForm;
