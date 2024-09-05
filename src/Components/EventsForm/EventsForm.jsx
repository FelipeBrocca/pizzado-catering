import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ConfirmEvent from './ConfirmEvent';
import EventOption from './EventOption';
import { EventContext } from '../../Context/EventContext';
import './EventsForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const EventsForm = () => {
  const {
    handleChangeBebida,
    handleChangeEntrada,
    handleChangeMenu,
    handleChangePostre,
    infoToSend,
  } = useContext(EventContext);

  const [visibleSections, setVisibleSections] = useState({
    asado: false,
    pizzas: false,
    entradas: false,
    alPlato: false,
    enSandwich: false,
    bebidas: false,
    postres: false,
    aPedido: true,
  });

  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(
          `https://pizzado-admin-panel.onrender.com/api/menus/by_category`
        );
        setMenuData(response.data);
      } catch (error) {
        console.error('Error fetching menu data', error);
      }
    };
    fetchMenuData();
  }, []);

  const toggleVisibility = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const sectionNames = {
    'Menú asado': 'asado',
    'Menú pizzas': 'pizzas',
    Entradas: 'entradas',
    'Menú al plato': 'alPlato',
    'Menú en sándwich': 'enSandwich',
    Postres: 'postres',
    Bebidas: 'bebidas',
    'A Pedido': 'aPedido',
  };

  const ExpandIcon = () => <FontAwesomeIcon icon={faChevronDown} />;
  const CollapseIcon = () => <FontAwesomeIcon icon={faMinus} />;

  return (
    <form className="form-register" id="form-event">
      <fieldset className="form-register-input">
        <legend>
          Diseñá tu menú.<br></br>
          <small>(Todos los precios son por persona)</small>
        </legend>

        {Object.entries(sectionNames).map(([title, key]) => (
          <div
            className={`combo-section ${
              visibleSections[key] ? 'combo-section-visible' : ''
            }`}
            key={key}
          >
            <div className="combo-header" onClick={() => toggleVisibility(key)}>
              <h3>{title}</h3>
              {visibleSections[key] ? <CollapseIcon /> : <ExpandIcon />}
            </div>
            {visibleSections[key] && menuData[title] && (
              <>
                {menuData[title].map((option) => (
                  <EventOption
                    option={option}
                    handleChange={
                      key === 'bebidas'
                        ? handleChangeBebida
                        : key === 'postres'
                        ? handleChangePostre
                        : key === 'entradas'
                        ? handleChangeEntrada
                        : handleChangeMenu
                    }
                    key={option.title}
                  />
                ))}
              </>
            )}
          </div>
        ))}
      </fieldset>
      {infoToSend.entrada[0] ||
      infoToSend.menu[0] ||
      infoToSend.postre[0] ||
      infoToSend.bebida[0] ? (
        <ConfirmEvent />
      ) : (
        ''
      )}
      <br></br>Se cobra un costo de envío desde San Isidro. Los menores de 10
      años pagan la mitad.
      <br></br>(*)Se debe abonar la logística del traslado.
      <br></br>Resolvé todas tus dudas por Whatsapp
    </form>
  );
};

export default EventsForm;
