import { useState } from "react"
import '../index.css'

export default function UseCartPopUp() {


    const [cartPopUpState, setCartPopUpState] = useState(false);
    const [isCartClosed, setCartIsClosed] = useState(true);

    const handleCartPopUp = () => {
        setCartPopUpState(!cartPopUpState);
        setCartIsClosed(!isCartClosed);
    }

    const backdropCartPopUp = (
        <div 
        className="backdropPopUp"
        onClick={handleCartPopUp}>
        </div>
    )


    return { cartPopUpState, setCartPopUpState, backdropCartPopUp, isCartClosed, setCartIsClosed, handleCartPopUp }

}