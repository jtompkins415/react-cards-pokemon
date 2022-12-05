import {useState} from 'react';


const useFlip = (initialState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialState);

    const flipState = () => {
        setIsFlipped(isFlipped => !isFlipped)
    }

    return [isFlipped, flipState]
}

export default useFlip;

