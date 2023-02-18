import React, { useRef } from 'react'
import { useState } from 'react';
import ConfirmEvent from './ConfirmEvent';
import EventOption from './EventOption';
import { Bebidas, Entradas, PizzaClassic, PizzaPremium, AsadoClassic, AsadoPremium, Hamburguesas, EmpanadasClassic, Postres } from './EventsCateringData';
import catering1 from '../../public/images/catering1.webp'
import catering2 from '../../public/images/catering2.webp'
import catering3 from '../../public/images/catering3.webp'
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
        if (found) {
            let newEntrada = entrada.filter(element => element !== found)
            setEntrada(newEntrada)
        } else {
            entrada.push({ name: food })
            setEntrada(entrada)
        }
        setMessage({ ...message, entrada: entrada })
    }
    // const handleChangeMenu = async (food) => {
    //     const found = await menu.find(element => element.name === food) 
    //     if(found){
    //         let newMenu = menu.filter(element => element !== found)
    //         setMenu(newMenu)
    //     } else {
    //         menu.push({name: food})
    //         setMenu(menu)
    //     }
    //     setMessage({ ...message, menu: menu })
    // }
    const handleChangePostre = async (food) => {
        const found = await postre.find(element => element.name === food)
        if (found) {
            let newPostre = postre.filter(element => element !== found)
            setPostre(newPostre)
        } else {
            postre.push({ name: food })
            setPostre(postre)
        }
        setMessage({ ...message, postre: postre })
    }
    const handleChangeBebida = async (food) => {
        const found = await bebida.find(element => element.name === food)
        if (found) {
            let newBebida = bebida.filter(element => element !== found)
            setBebida(newBebida)
        } else {
            bebida.push({ name: food })
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
            <div className='top-form'>
                <p>El servicio incluye a los cocineros y mozos. <br></br>Trabajamos en la parrilla u horno que haya en el lugar, aunque también tenemos nuestras parrillas movibles en caso de ser necesarias.<br></br> Se cobra un costo de envío desde San Isidro. Los menores de 10 años pagan la mitad. Se debe abonar la logística del traslado.</p>
                <div className='form-imges-container'>
                    <div className='form-img-div'><img src={catering1} alt='catering1' /></div>
                    <div className='form-img-div'><img src={catering2} alt='catering2'/></div>
                    <div className='form-img-div'><img src={catering3} alt='catering3'/></div> 
                </div>
            </div>
            <form className="form-register">
                <fieldset className='form-register-input'>
                    <legend>Elegí tus combos.<br></br><small>(Todos los precios son por persona)</small></legend>
                    <div className='combo-section'>
                        <h3>Pizzas</h3>
                        <EventOption
                            OptionName={PizzaClassic}
                        />
                        <EventOption
                            OptionName={PizzaPremium}
                        />
                    </div>
                    <div className='combo-section'>
                        <h3>Asado</h3>
                        <EventOption
                            OptionName={AsadoClassic}
                        />
                        <EventOption
                            OptionName={AsadoPremium}
                        />
                    </div>
                    <div className='combo-section'>
                        <h3>Hamburguesas</h3>
                        <EventOption
                            OptionName={Hamburguesas}
                        />
                    </div>
                    <div className='combo-section'>
                        <h3>Empanadas</h3>
                        <EventOption
                            OptionName={EmpanadasClassic}
                        />
                    </div>
                    <div className='combo-section'>
                        <h3>Entradas</h3>
                        <EventOption
                            OptionName={Entradas}
                        />
                    </div>
                    <div className='combo-section'>
                        <h3>Postres</h3>
                        <EventOption
                            OptionName={Postres}
                        />
                    </div>
                    <div className='combo-section'>
                        <h3>Bebidas</h3>
                        <EventOption
                            OptionName={Bebidas}
                        />
                    </div>
                </fieldset>
                <ConfirmEvent />
            </form>
        </section>
    )
}

export default EventsForm
