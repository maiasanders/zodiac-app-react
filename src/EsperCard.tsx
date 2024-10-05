import { Link } from "react-router-dom";
import { Esper } from "./ZodiacTypes";

const EsperCard = (props: Esper) => {
    const { name, entryNum, locationMain, locationZone, level, element, stealItems, wiki } = props;

    // TODO link to details page for esper
    return (
        <Link to={`#`} className="esper-card">
            <div>
                <h1>{name} - {entryNum}</h1>
                <h2>{element} Level: {level}</h2>
                <h3>{locationMain} - {locationZone}</h3>
                <ul>
                    {stealItems.map(item => {
                        return (
                            <li>item</li>
                        )
                    })}
                </ul>
            </div>
        </Link>
    )
}
