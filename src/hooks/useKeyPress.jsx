import { useState, useEffect } from 'react'

const useKeyPress = (targetKey) => {

    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = ({ key }) => {
        if (key === targetKey){
            setKeyPressed(true);
        }
    }

    const upHandler = ({ key }) => {
        if (key === targetKey){
            setKeyPressed(false);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", downHandler);
        document.addEventListener("keyup", upHandler);

        return () => {
            document.removeEventListener("keydown", downHandler);
            document.removeEventListener("keyup", upHandler);
        }
    })

}

export default useKeyPress;