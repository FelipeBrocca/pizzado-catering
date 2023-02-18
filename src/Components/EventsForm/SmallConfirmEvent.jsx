import React from 'react'

const SmallConfirmEvent = ({formOpen, toggleYellowForm}) => {
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