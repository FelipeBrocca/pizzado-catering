import { createContext, useEffect, useState, useRef } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const initialInfoToSend = {
    name: '',
    email: '',
    address: '',
    date: '',
    quant: '',
    entrada: [],
    menu: [],
    postre: [],
    bebida: [],
  };

  const [parriCheck, setParriCheck] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [infoToSend, setInfoToSend] = useState(initialInfoToSend);

  const handleChangeEntrada = async (food) => {
    const found = await infoToSend.entrada.find(
      (element) => element === food.title
    );
    if (found) {
      let newEntrada = infoToSend.entrada.filter(
        (element) => element !== found
      );
      setInfoToSend({ ...infoToSend, entrada: newEntrada });
    } else {
      setInfoToSend((prevState) => ({
        ...prevState,
        entrada: [...prevState.entrada, food.title],
      }));
    }
  };
  const handleChangeMenu = async (food) => {
    const found = await infoToSend.menu.find(
      (element) => element === food.title
    );
    if (found) {
      let newMenu = infoToSend.menu.filter((element) => element !== found);
      setInfoToSend({ ...infoToSend, menu: newMenu });
    } else {
      setInfoToSend((prevState) => ({
        ...prevState,
        menu: [...prevState.menu, food.title],
      }));
    }
  };
  const handleChangePostre = async (food) => {
    const found = await infoToSend.postre.find(
      (element) => element === food.title
    );
    if (found) {
      let newPostre = infoToSend.postre.filter((element) => element !== found);
      setInfoToSend({ ...infoToSend, postre: newPostre });
    } else {
      setInfoToSend((prevState) => ({
        ...prevState,
        postre: [...prevState.postre, food.title],
      }));
    }
  };
  const handleChangeBebida = async (food) => {
    const found = await infoToSend.bebida.find(
      (element) => element === food.title
    );
    if (found) {
      let newBebida = infoToSend.bebida.filter((element) => element !== found);
      setInfoToSend({ ...infoToSend, bebida: newBebida });
    } else {
      setInfoToSend((prevState) => ({
        ...prevState,
        bebida: [...prevState.bebida, food.title],
      }));
    }
  };

  const bodyRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    bodyRef.current = document.getElementById('body');
    formRef.current = document.getElementById('form-event');
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      formOpen
        ? bodyRef.current.classList.add('body-fixed')
        : bodyRef.current.classList.remove('body-fixed');
    }
  }, [formOpen]);

  const resetForm = async (e) => {
    e.preventDefault();
    try {
      await setInfoToSend(initialInfoToSend);
      await formRef.current.reset();
      setFormOpen((prevFormOpen) => !prevFormOpen);
    } catch (error) {
      console.error('Error resetting form:', error);
    }
  };

  const toggleYellowForm = () => {
    setFormOpen((prevFormOpen) => !prevFormOpen);
  };

  const messageForm = `Hola, mi nombre es ${
    infoToSend.name ? infoToSend.name : '*Sin especificar*'
  } quiero averiguar para cotizar un evento. \n\n *Fecha:* ${
    infoToSend.date ? infoToSend.date : '*Sin especificar*'
  }.\n *Entrada:*\n${
    infoToSend.entrada[0]
      ? infoToSend.entrada.map((entrada) => `-${entrada} \n`).join('')
      : 'Sin especificar'
  } \n *Menu principal:*\n${
    infoToSend.menu[0]
      ? infoToSend.menu.map((menu) => `-${menu} \n`).join('')
      : 'Sin especificar'
  } \n *Postre:*\n${
    infoToSend.postre[0]
      ? infoToSend.postre.map((postre) => `-${postre} \n`).join('')
      : 'Sin especificar'
  } \n *Bebidas:*\n${
    infoToSend.bebida[0]
      ? infoToSend.bebida.map((bebida) => `-${bebida} \n`).join('')
      : 'Sin especificar'
  }`;

  return (
    <EventContext.Provider
      value={{
        messageForm,
        handleChangeBebida,
        handleChangeEntrada,
        handleChangeMenu,
        handleChangePostre,
        infoToSend,
        setInfoToSend,
        resetForm,
        formOpen,
        setFormOpen,
        toggleYellowForm,
        parriCheck,
        setParriCheck,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
