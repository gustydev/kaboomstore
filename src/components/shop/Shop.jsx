import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card";
import { useOutletContext } from "react-router-dom";
import styles from './shop.module.css'

export default function Shop() {
    const [data] = useOutletContext();

    if (data.length === 0) return 'Loading...'

    return (
        <div className={styles.cardContainer}>
            {data.map((i) => { return <Card key={i.id} title={i.title} image={i.image} price={i.price} rating={i.rating}></Card>})}
        </div>
    )
}