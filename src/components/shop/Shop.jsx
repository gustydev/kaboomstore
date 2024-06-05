import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
    const [data] = useOutletContext();
    if (data.length === 0) return 'Loading...'

    return (
        <div className="card-container">
            {data.map((i) => { return <Card key={i.id} title={i.title} image={i.image} price={i.price} rating={i.rating}></Card>})}
        </div>
    )
}