import {useState} from 'react';

const useForm = (submitCallback) => {
    const [state, setState] = useState({});

    const handleSubmit = e => {
        submitCallback();
    }

    const handleChange = e => {
        console.log("handle change")
        e.persist();
        setState((state) => ({...state, [e.target.name]:e.target.value}))
    }

    console.log("printing state ",state)


    return [state, handleChange,handleSubmit];

}

export default useForm;