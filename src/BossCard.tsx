import { Link } from "react-router-dom";
import { OptionalBoss } from "./ZodiacTypes";

const BossCard = (props: OptionalBoss) => {
    const { name, entryNum, locationMain, locationZone, level, stealItems, wiki, reward, quest, img, type } = props;

    // TODO link to details when available
    // TODO add back images when I have them figured out
    return (
        <div className="boss-card card">
            <div className="card-title">
                <h2>{name}</h2>
                <h2>{entryNum}</h2>
            </div>
            <h3>Level: {level}</h3>
            {/* <img src={img} alt={name} /> */}
            <h4>{locationMain} - {locationZone}</h4>
            <ul>
                {stealItems.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
            <h5>{quest}</h5>
            <h5>Reward(s): {reward}</h5>
        </div>
    )
}

export { BossCard };
