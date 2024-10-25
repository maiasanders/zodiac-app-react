import { CheckSlider } from "./CheckSlider";
import { EntryType, EntryBase } from "./ZodiacTypes"
import { Component, ReactElement, useEffect, useState } from "react"
// import imageArr from './resources/images'
import ent_259 from '../public/images/ent_259.png'
// import imgUrl from `../public/images/${picture}`
import { Images } from "../public/images/images";
import { getImageUrl } from "./image-utils";


// for (const image in images)

const Card = ({ name, entryNum, locationMain, locationZone, completed, picture }: EntryBase) => {

    let imgUrl = 'https://placehold.co/400/600/red';

    useEffect(() => {
        const importImg = async () => {
            const img = await import(`/images/${picture}`);
            imgUrl = img;
        }
    })

    return (
        <div className="card p-2 bg-merino-200 rounded-lg border-merino-700 border-2 shadow-xl hover:bg-merino-100 hover:shadow-2xl flex items-center gap-2 h-22">
            {/* { props } */}
            <img
                src={`./images/${picture}` || 'https://placehold.co/400/600/red'}
                // src={ent_259}
                key={entryNum}
                className="max-h-16 max-w-16 rounded-md sepia hover:sepia-0"
            />
            <div className="grow">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <h3 hidden={!entryNum || entryNum >= 1000}>{entryNum}</h3>
                </div>
                <div className="flex justify-between items-end">
                    <h4 className="text-ellipsis">{locationMain} - {locationZone}</h4>
                    <CheckSlider completed={completed} />
                </div>
            </div>
        </div>
    )
}
export { Card }
