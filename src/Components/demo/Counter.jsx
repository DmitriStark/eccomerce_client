import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0);
    const [numInput, setNumInput] = useState(0);

    function addHandler() {
        console.log(typeof numInput);
        setCount(count + numInput)
    }

    return <>
        <input type="number" value={numInput}
            onChange={e => setNumInput(e.target.value)} />
        <button onClick={addHandler}>add</button>
        <h2>{count}</h2>
    </>
}