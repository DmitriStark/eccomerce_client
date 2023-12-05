import { useState } from "react";

export default function InfoToggle({ info }) {
    const [isHidden, setIsHidden] = useState(true);

    function toggleIsHidden() {
        setIsHidden(!isHidden);
    }

    return <div className="info-toggle">
        <h3>{info.title}</h3>
        <button onClick={toggleIsHidden}>
            {isHidden ? 'show' : 'hide'}
        </button>
        {!isHidden && <p>{info.content}</p>}
    </div>;
}