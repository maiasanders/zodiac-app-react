import { BossCard } from "./BossCard";
import optionalBossData from "../resources/optional-bosses.json"

const OptionalBossList = () => {
const optionalBosses = [];
optionalBosses.push(...optionalBossData)

    return (
        <div id="optional-boss-list" className="grid gap-2 grid-cols-1 md:grid-cols-2 ">
            {!optionalBosses.length ? (<h2>No bosses found, kupo!</h2>) : optionalBosses.map(boss => {
                return (
                <BossCard
                    name={boss.name}
                    entryNum={boss.entryNum}
                    locationMain={boss.locationMain}
                    locationZone={boss.locationZone}
                    level={boss.level}
                    stealItems={boss.stealItems}
                    wiki={boss.wiki}
                    reward={boss.reward}
                    quest={boss.quest}
                    img={boss.img ? boss.img : "https://placehold.co/600x400"}
                    type={boss.type}
                    // _id={boss._id}
                    key={boss.entryNum}
                />)
            })}
        </div>
    )
}

export { OptionalBossList };
