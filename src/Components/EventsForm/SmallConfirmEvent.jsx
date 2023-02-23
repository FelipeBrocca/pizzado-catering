import React, { useContext } from 'react'
import { EventContext } from '../../Context/EventContext'

const SmallConfirmEvent = () => {

    const {formOpen, toggleYellowForm} = useContext(EventContext)
    return (
        <>
            <div
                className={formOpen ? 'button-close-form' : 'button-open-form'}
                id='button-open-form'
                onClick={toggleYellowForm}
            >{formOpen ? 'X' : 'Solicitar servicio'}
            </div>
        </>
    )
}

export default SmallConfirmEvent