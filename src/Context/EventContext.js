import { createContext, useEffect, useState, useRef } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const initialInfoToSend = {
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
    }

    const [formOpen, setFormOpen] = useState(false)
    const [entrada, setEntrada] = useState([])
    const [menu, setMenu] = useState([])
    const [postre, setPostre] = useState([])
    const [bebida, setBebida] = useState([])
    const [infoToSend, setInfoToSend] = useState(initialInfoToSend)

    useEffect(() => {
        setInfoToSend({...infoToSend, entrada: entrada, menu: menu, postre: postre, bebida: bebida})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entrada, menu, postre, bebida])


    const handleChangeEntrada = async (food) => {
        const found = await entrada.find(element => element === food.title)
        if (found) {
            let newEntrada = entrada.filter(element => element !== found)
            setEntrada(newEntrada)
        } else {
            setEntrada(prevState => [...prevState, food.title])
        }
    }
    const handleChangeMenu = async (food) => {
        const found = await menu.find(element => element === food.title)
        if (found) {
            let newMenu = menu.filter(element => element !== found)
            setMenu(newMenu)
        } else {
            setMenu(prevState => [...prevState, food.title])
        }
    }
    const handleChangePostre = async (food) => {
        const found = await postre.find(element => element === food.title)
        if (found) {
            let newPostre = postre.filter(element => element !== found)
            setPostre(newPostre)
        } else {
            setPostre(prevState => [...prevState, food.title])
        }
    }
    const handleChangeBebida = async (food) => {
        const found = await bebida.find(element => element === food.title)
        if (found) {
            let newBebida = bebida.filter(element => element !== found)
            setBebida(newBebida)
        } else {
            setBebida(prevState => [...prevState, food.title])
        }
    }

    const bodyRef = useRef()
    const formRef = useRef()

    useEffect(() => {
        bodyRef.current = document.getElementById('body')
        formRef.current = document.getElementById('form-event')
    }, [])

    useEffect(() => {
        if (bodyRef.current) {
            formOpen
                ? bodyRef.current.classList.add('body-fixed')
                : bodyRef.current.classList.remove('body-fixed')
        }
    }, [formOpen])

    const resetForm = async (e) => {
        e.preventDefault();
        try {
            await setMenu([]);
            await setEntrada([]);
            await setBebida([]);
            await setPostre([]);
            await setInfoToSend(initialInfoToSend);
            await formRef.current.reset();
            setFormOpen(prevFormOpen => !prevFormOpen)
        } catch (error) {
            console.error('Error resetting form:', error);
        }
    }
    
    const toggleYellowForm = () => {
        setFormOpen(prevFormOpen => !prevFormOpen);
      }


    const messageForm = `Hola, mi nombre es ${infoToSend.name ? infoToSend.name : '*Sin especificar*'} quiero averiguar para cotizar un evento. \n\n *Fecha:* ${infoToSend.date ? infoToSend.date : '*Sin especificar*'}, desde ${infoToSend.timeStart ? infoToSend.timeStart : '*Sin especificar*'}hs. hasta ${infoToSend.timeEnd ? infoToSend.timeEnd : '*Sin especificar*'}hs.\n *Dirección:* ${infoToSend.address ? infoToSend.address : '*Sin especificar*'} \n *Cantidad de invitados:* ${infoToSend.quant ? infoToSend.quant : '*Sin especificar*'}\n *Entrada:*\n${infoToSend.entrada[0] ? infoToSend.entrada.map((entrada) => `-${entrada} \n`).join('') : 'Sin especificar'} \n *Menu principal:*\n${infoToSend.menu[0] ? infoToSend.menu.map((menu) => `-${menu} \n`).join('') : 'Sin especificar'} \n *Postre:*\n${infoToSend.postre[0] ? infoToSend.postre.map((postre) => `-${postre} \n`).join('') : 'Sin especificar'} \n *Bebidas:*\n${infoToSend.bebida[0] ? infoToSend.bebida.map((bebida) => `-${bebida} \n`).join('') : 'Sin especificar'}`

    return (
        <EventContext.Provider
            value={{
                messageForm,
                entrada,
                setMenu,
                setBebida,
                setEntrada,
                setPostre,
                menu,
                postre,
                bebida,
                handleChangeBebida,
                handleChangeEntrada,
                handleChangeMenu,
                handleChangePostre,
                infoToSend,
                setInfoToSend,
                resetForm,
                formOpen,
                setFormOpen,
                toggleYellowForm
            }}
        >
            {children}
        </EventContext.Provider>
    )
}