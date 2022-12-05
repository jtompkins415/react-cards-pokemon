import {useState} from 'react';
import axios from 'axios';


function useAxios(url) {
    const [response, setResponse] = useState([])
    
    const addResponse = async (formatter = data => data, restOfUrl = '') => {
        const resp = await axios.get(`${url}${restOfUrl}`);
        setResponse(data => [...data, formatter(resp.data)])
    };

    const clearResponse = () => setResponse([])

    return [response, addResponse, clearResponse]

};

export default useAxios;

