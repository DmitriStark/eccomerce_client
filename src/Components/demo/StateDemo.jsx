import InfoToggle from "./InfoToggle";
import { infoList } from "./data";

export default function StateDemo() {
    const infosElements = infoList.map(i =>
        <InfoToggle key={i.id} info={i} />);

    return <div className="infos">
        {infosElements}
    </div>;
}