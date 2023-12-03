export default function ClickDemo(){
    return <div className="demo">
        <h3 onMouseOver={shaharHandler}>hover me</h3>
        <button onClick={shaharHandler}>click me!</button>
    </div>
}

function shaharHandler(){
    alert("hey ya");
}