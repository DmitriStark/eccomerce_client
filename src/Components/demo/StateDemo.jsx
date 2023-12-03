import InfoToggle from "./InfoToggle";

const info ={
    title:"my secret",
    content:"ilike cheese"
}

export default function StateDemo(){
    return <div className="demo">
       <InfoToggle info={info}/>
    </div>
}

