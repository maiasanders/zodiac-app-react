import { BossCard } from "./BossCard";
import { Card } from "./Card";
import { EntryBase, EntryType } from "./ZodiacTypes";
import optionalBossData from "../resources/optional-bosses.json"

const CardList = () => {
    const entries: EntryType[] = [];
    entries.push(...optionalBossData);

    return (
        <div id="card-list" className="grid gap-2 grid-cols-1 md:grid-cols-2 ">
            {entries.length === 0 ? (<p>Nothing found, kupo!</p>) :
                entries.map(entry => {
                    return (<Card
                        name={entry.name}
                        entryNum={entry.entryNum}
                        locationMain={entry.locationMain}
                        locationZone={entry.locationZone}
                        completed={entry.completed}
                        picture={entry.picture}
                    />)
                })
            }
        </div>
    )
}

export { CardList };
