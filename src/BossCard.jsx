import { Link } from "react-router-dom";

const BossCard = (props) => {
    const {name, entryNum, locationMain, locationZone, level, stealItems, wiki, reward, quest } = props;

    // TODO link to details when available
    return (
        <div className="boss-card">
            <h1>{name} - {entryNum}</h1>
            <h2>Level: {level}</h2>
            <h3>{locationMain} - {locationZone}</h3>
            <ul>
                {stealItems.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
            <h4>{quest}</h4>
            <h5>Reward(s): {reward}</h5>
        </div>
    )
}
