import React, { useRef } from 'react'
import { useState } from 'react';
import ReactWhatsapp from 'react-whatsapp';
import { Bebidas, Entradas, Menu, Postres } from './EventsCateringData';
import './EventsForm.css'

const EventsForm = () => {

    const [entrada, setEntrada] = useState([])
    const [menu, setMenu] = useState([])
    const [postre, setPostre] = useState([])
    const [bebida, setBebida] = useState([])
    const [message, setMessage] = useState({})

    const nameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()
    const quantRef = useRef()

    const handleChangeEntrada = async (food) => {
        const found = await entrada.find(element => element.name === food) 
        if(found){
           let newEntrada = entrada.filter(element => element !== found)
           setEntrada(newEntrada)
        } else {
            entrada.push({ name: food })
            setEntrada(entrada)
        }
        setMessage({ ...message, entrada: entrada })
    }
    const handleChangeMenu = async (food) => {
        const found = await menu.find(element => element.name === food) 
        if(found){
            let newMenu = menu.filter(element => element !== found)
            setMenu(newMenu)
        } else {
            menu.push({name: food})
            setMenu(menu)
        }
        setMessage({ ...message, menu: menu })
    }
    const handleChangePostre = async(food) => {
        const found = await postre.find(element => element.name === food) 
        if(found){
            let newPostre = postre.filter(element => element !== found)
            setPostre(newPostre)
        } else {
            postre.push({name: food})
            setPostre(postre)
        }
        setMessage({ ...message, postre: postre })
    }
    const handleChangeBebida = async(food) => {
        const found = await bebida.find(element => element.name === food) 
        if(found){
            let newBebida = bebida.filter(element => element !== found)
            setBebida(newBebida)
        } else {
            bebida.push({name: food})
            setBebida(bebida)
        }
        setMessage({ ...message, bebida: bebida })
    }

    let infoToSend = {
        name: '',
        email: '',
        address: '',
        date: '',
        time: '',
        quant: '',
        entrada: '',
        menu: '',
        postre: '',
        bebida: ''
    };

    const getInfo = () => {
        infoToSend = {
            name: nameRef.current.value ? nameRef.current.value : 'Sin especificar',
            email: emailRef.current.value ? emailRef.current.value : 'Sin especificar',
            address: addressRef.current.value ? addressRef.current.value : 'Sin especificar',
            date: dateRef.current.value ? dateRef.current.value : 'Sin especificar',
            time: timeRef.current.value ? timeRef.current.value : 'Sin especificar',
            quant: quantRef.current.value ? quantRef.current.value : 'Sin especificar',
            entrada: entrada ? entrada?.map((entrada) => entrada.name) : 'Sin especificar',
            menu: menu ? menu?.map((menu) => menu.name) : 'Sin especificar',
            postre: postre ? postre?.map((postre) => postre.name) : 'Sin especificar',
            bebida: bebida ? bebida?.map((bebida) => bebida.name) : 'Sin especificar'
        }

        setMessage(infoToSend);
        console.log(message);
    }

    const messageForm = `Hola, mi nombre es ${message.name} quiero averiguar para cotizar un evento. \n\n *Fecha:* ${message.date} ${message.time}hs. \n *Dirección:* ${message.address} \n *Cantidad de invitados:* ${message.quant}\n *Entrada:*\n   ${message?.entrada?.map((entrada) => `   -${entrada} \n`)} \n *Menu principal:*\n   ${message?.menu?.map((menu) => `   -${menu} \n`)} \n *Postre:*\n   ${message?.postre?.map((postre) => `   -${postre} \n`)} \n *Bebidas:*\n   ${message?.bebida?.map((bebida) => `   -${bebida} \n`)}`

    return (
        <section className="section-register">
            <h2 className="titulo-register">Cotizá tu evento!</h2>
            <form className="form-register">
                <div className="form-register-input">
                    <label>Nombre completo</label>
                    <input type="text" ref={nameRef} onChange={getInfo} name="name" id="name" placeholder="Ej.: Juan Perez" required />
                </div>
                <div className="form-register-input">
                    <label>Email</label>
                    <input type="email" ref={emailRef} onChange={getInfo} name="email" id="email" placeholder="email@tuemail.tu" required />
                </div>
                <div className="form-register-input">
                    <label>Dirección</label>
                    <input type="street-address" ref={addressRef} onChange={getInfo} placeholder="Av. Falsa 123, Palermo" />
                </div>
                <fieldset className='form-register-input'>
                    <legend>Elegí tus combos.</legend>
                    <div className='combo-section'>
                        <h3>Entradas</h3>
                        {
                            Entradas.map((entrada) => {
                                return (
                                    <div key={entrada.name}>
                                        <input type="checkbox"
                                            id="scales"
                                            name='entrada'
                                            onChange={() => handleChangeEntrada(entrada.name)}
                                        />
                                        <label>{entrada.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='combo-section'>
                        <h3>Menú principal</h3>
                        {
                            Menu.map((menu) => {
                                return (
                                    <div key={menu.name}>
                                        <input
                                            type="checkbox"
                                            id="scales"
                                            name="menu"
                                            onChange={() => handleChangeMenu(menu.name)} />
                                        <label>{menu.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='combo-section'>
                        <h3>Postres</h3>
                        {
                            Postres.map((postre) => {
                                return (
                                    <div key={postre.name}>
                                        <input
                                            type="checkbox"
                                            id="scales"
                                            name="postre"
                                            onChange={() => handleChangePostre(postre.name)} />
                                        <label>{postre.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='combo-section'>
                        <h3>Bebidas</h3>
                        {
                            Bebidas.map((bebida) => {
                                return (
                                    <div key={bebida.name}>
                                        <input
                                            type="checkbox"
                                            id="scales"
                                            name="bebida"
                                            onChange={() => handleChangeBebida(bebida.name)}
                                        />
                                        <label>{bebida.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </fieldset>
                <div className='event-and-quantity'>
                    <div className="form-register-input datetime">
                        <label>Fecha del evento</label>
                        <input type="date" ref={dateRef} onChange={getInfo} id="start" name="trip-start"
                            className='date-event'
                            min="2023-01-01" max="2200-12-31" />
                    </div>
                    <div className="form-register-input datetime">
                        <label>Hora del evento</label>
                        <input type="time" ref={timeRef} onChange={getInfo} id="start" name="trip-start"
                            className='date-event' />
                    </div>
                </div>
                <div className="form-register-input quantity">
                    <label>Cantidad de invitados</label>
                    <input type="number" ref={quantRef} onChange={getInfo} min={0} className='quantity-event' />
                </div>
                <ReactWhatsapp
                    className="button-card"
                    number='+54 9 11 4078-1149'
                    message={messageForm}
                >
                    <span className="button-card-txt"> Enviar </span>
                    <span>¡Dale!</span>
                </ReactWhatsapp>
            </form>
        </section>
    )
}

export default EventsForm
