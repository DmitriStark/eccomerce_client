import { useState } from "react"




export default function InfoToggle(props) {
    const [isHidden, setIsHidden] = useState(false);

    function toggleHidden (){
        setIsHidden(!isHidden);
    }
    const info = props.info;

    return <div className="info-toggle">
        <h3>{info.title}</h3>
        <button onClick={toggleHidden}>{isHidden?"show":"hide"}</button>
        
        {isHidden && <p>{info.content}</p>}
    </div>
}

