import {useEffect, useState} from 'react';
import axios from 'axios';

const useFlip = (initialState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialState);

    const flipState = () => {
        setIsFlipped(isFlipped => !isFlipped)
    }

    return [isFlipped, flipState]
}

const useAxios = (lsKey, url) => {
    const [responses, setResponses] = useLocalStorage(lsKey);
    
    const addResponse = async (formatter = data => data, restOfUrl = '') => {
        const resp = await axios.get(`${url}${restOfUrl}`);
        setResponses(data => [...data, formatter(resp.data)])
    };

    const clearResponse = () => setResponses([])

    return [responses, addResponse, clearResponse]

};

const useLocalStorage = (key, initialValue = []) => {
    if (localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key))
    }
    
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}


export default useLocalStorage;
export { useFlip, useAxios, useLocalStorage };