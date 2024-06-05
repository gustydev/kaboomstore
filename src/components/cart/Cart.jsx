// should rename to Checkout probably

import { useOutletContext } from "react-router-dom"

export default function Cart() {
    const [data, cart] = useOutletContext();

    const totalPrice = cart.reduce((a, b) => a + (b. quantity * b.price), 0)

    return (
        <div>Total: ${totalPrice}</div>
    )
}