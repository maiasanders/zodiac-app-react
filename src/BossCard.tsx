import { Link } from "react-router-dom";
import { OptionalBoss } from "./ZodiacTypes";

const BossCard = (props: OptionalBoss) => {
    const { name, entryNum, locationMain, locationZone, level, stealItems, wiki, reward, quest, img, type } = props;
    const key = props.entryNum;

    // TODO link to details when available
    // TODO add back images when I have them figured out
    return (
        <div className="p-2 bg-merino-200 rounded-lg border-merino-700 border-2 shadow-xl">
            <div className="card-title flex justify-between">
                <h2 className="text-lg font-semibold">{name}</h2>
                <h2>{entryNum}</h2>
            </div>
            <h3>Level: {level}</h3>
            {/* <img src={img} alt={name} /> */}
            <h4>{locationMain} - {locationZone}</h4>
            {/* <ul>
                {stealItems.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul> */}
            <h5>{quest}</h5>
            {/* <h5>Reward(s): {reward}</h5> */}
        </div>
    )
}

export { BossCard };
