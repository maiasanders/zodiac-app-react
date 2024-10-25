export type EntryBase = {
    name: string;
    entryNum: number;
    locationMain: string;
    locationZone?: string;
    completed: boolean;
    picture: string;
}

export type OptionalBoss = EntryBase & {
    level: number;
    stealItems: string[];
    wiki: string;
    reward: string;
    quest: string;
    img: string;
    type: string[];
    // _id: string;
};
export type Esper = EntryBase & {
    type: string[];
    level: number;
    element: string;
    stealItems: string[];
    wiki: string;
}

export type EntryType = OptionalBoss | Esper;
