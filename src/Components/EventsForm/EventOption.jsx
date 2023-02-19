import React from 'react'

const EventOption = ({OptionName, handleChange}) => {



    return (
        <>
            {
                OptionName.map((option) => {
                    return (
                        <>
                            <div key={`title - ${option.title}`}>
                                <label className='checkbox-style'>
                                    <input type="checkbox"
                                        id="scales"
                                        name='option'
                                        onChange={(e) => handleChange(option, e)}
                                    />
                                    <span></span>
                                </label>
                                <div className='option-container'>
                                    <label>{option.title}</label>
                                    <p>${option.price}</p>
                                </div>
                            </div>
                            {
                            option.food ? 
                            <ul className='menu-food-list'>
                                {
                                    option.food?.map((foodOpt) => {
                                        return (
                                            <li key={`food - ${foodOpt}`}>
                                                {foodOpt}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            : ''
                            }
                            {
                            option.entradas ? 
                            <>
                            <p>Entradas:</p>
                            <ul className='menu-food-list'>
                                {
                                    option.entradas?.map((foodOpt) => {
                                        return (
                                            <li key={`entrada - ${foodOpt}`}>
                                                {foodOpt}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            </>
                            : ''
                            }
                            {
                            option.principal ? 
                            <>
                            <p>Principal:</p>
                            <ul className='menu-food-list'>
                                {
                                    option.principal?.map((foodOpt) => {
                                        return (
                                            <li key={`principal - ${foodOpt}`}>
                                                {foodOpt}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            </>
                            : ''
                            }
                            {
                            option.options ? 
                            <>
                            <ul className='menu-food-list'>
                                {
                                    option.options?.map((foodOpt) => {
                                        return (
                                            <li key={`postre - ${foodOpt}`}>
                                                {foodOpt}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            </>
                            : ''
                            }
                        </>
                    )
                })
            }
        </>
    )
}

export default EventOption 