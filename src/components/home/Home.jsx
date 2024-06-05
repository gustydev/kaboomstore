import { Link } from "react-router-dom"

export default function Main() {
    return (
        <>
        <div>Welcome to Kaboom! Here, we have the most explosive deals on the electronics market!</div>
        <button><Link to='/shop'>Shop now</Link></button>
        </>
    )
}