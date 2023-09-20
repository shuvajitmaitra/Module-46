import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);


    const changeOf = e => {
        setValue(e.target.value);
    }

    return [

        value, changeOf
    ]

}

export default useInputState;