import {useState} from 'react';

const useForm = (submitCallback) => {
    const [state, setState] = useState({});

    const handleSubmit = e => {
        submitCallback();
    }

    const handleChange = e => {
        console.log("handke change")
        //e.persist();
        setState((state) => ({...state, [e.target.name]:e.target.value}))
    }


    return [state, handleChange,handleSubmit];

}

export default useForm;