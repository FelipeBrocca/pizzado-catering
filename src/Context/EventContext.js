import { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        address: '',
        date: '',
        timeStart: '',
        timeEnd: '',
        quant: '',
        entrada: [],
        menu: [],
        postre: [],
        bebida: []
    })
    const [entrada, setEntrada] = useState([])
    const [menu, setMenu] = useState([])
    const [postre, setPostre] = useState([])
    const [bebida, setBebida] = useState([])
    const [infoToSend, setInfoToSend] = useState({
        name: '',
        email: '',
        address: '',
        date: '',
        timeStart: '',
        timeEnd: '',
        quant: '',
        entrada: [],
        menu: [],
        postre: [],
        bebida: []
    })


    const handleChangeEntrada = async (food) => {
        const found = await entrada.find(element => element.title === food)
        if (found) {
            let newEntrada = entrada.filter(element => element !== found)
            setEntrada(newEntrada.title)
        } else {
            entrada.push(food.title)
            setEntrada(entrada)
        }
        setInfoToSend({ ...infoToSend, entrada: entrada })
        setMessage(infoToSend)
    }
    const handleChangeMenu = async (food) => {
        const found = await menu.find(element => element === food.title)
        if (found) {
            let newMenu = menu.filter(element => element !== food.title)
            setMenu(newMenu)
        } else {
            menu.push(food.title)
            setMenu(menu)
        }
        setInfoToSend({ ...infoToSend, menu: menu })
        setMessage(infoToSend)
    }
    const handleChangePostre = async (food) => {
        const found = await postre.find(element => element.title === food.title)
        if (found) {
            let newPostre = postre.filter(element => element !== found)
            setPostre(newPostre.title)
        } else {
            postre.push(food.title)
            setPostre(postre)
        }
        setInfoToSend({ ...infoToSend, postre: postre })
        setMessage(infoToSend)
    }
    const handleChangeBebida = async (food) => {
        const found = await bebida.find(element => element.title === food.title)
        if (found) {
            let newBebida = bebida.filter(element => element !== found)
            setBebida(newBebida.title)
        } else {
            bebida.push(food.title)
            setBebida(bebida)
        }
        setInfoToSend({ ...infoToSend, bebida: bebida })
        setMessage(infoToSend)
    }

    const messageForm = `Hola, mi nombre es ${message.name} quiero averiguar para cotizar un evento. \n\n *Fecha:* ${message.date} ${message.timeStart}hs. \n *Dirección:* ${message.address} \n *Cantidad de invitados:* ${message.quant}\n *Entrada:*\n   ${message.entrada[0] ? message.entrada.map((entrada) => `   -${entrada} \n`) : 'Sin especificar'} \n *Menu principal:*\n   ${message.menu[0] ? message.menu.map((menu) => `   -${menu} \n`) : 'Sin especificar'} \n *Postre:*\n   ${message.postre[0] ? message.postre.map((postre) => `   -${postre} \n`) : 'Sin especificar'} \n *Bebidas:*\n   ${message.bebida[0] ? message.bebida.map((bebida) => `   -${bebida} \n`) : 'Sin especificar'}`

    return (
        <EventContext.Provider
            value={{
                messageForm,
                message,
                setMessage,
                entrada,
                menu,
                postre,
                bebida,
                handleChangeBebida,
                handleChangeEntrada,
                handleChangeMenu,
                handleChangePostre,
                infoToSend,
                setInfoToSend
            }}
        >
            {children}
        </EventContext.Provider>
    )
}