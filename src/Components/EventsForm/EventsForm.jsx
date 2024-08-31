import React, { useContext, useState } from 'react';
import ConfirmEvent from './ConfirmEvent';
import EventOption from './EventOption';
import { EventContext } from '../../Context/EventContext';
import {
  Bebidas,
  Entradas,
  PizzaClassic,
  PizzaPremium,
  AsadoClassic,
  AsadoPremium,
  AsadoGourmet,
  AsadoEspecial,
  Cazuelas,
  Veggies,
  Perniles,
  Hamburguesas,
  EmpanadasClassic,
  Celiacos,
  Postres,
  MenuAPedido,
} from './EventsCateringData';
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

  // Step 2: Toggle visibility function
  const toggleVisibility = (section) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Utility to dynamically assign section names
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

  // Placeholder icon components, replace these with actual imports
  const ExpandIcon = () => <FontAwesomeIcon icon={faChevronDown} />; // Replace with  or similar
  const CollapseIcon = () => <FontAwesomeIcon icon={faMinus} />; // Replace with or similar

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
            {visibleSections[key] && (
              <>
                {key === 'entradas' &&
                  Entradas.map((option) => (
                    <EventOption
                      option={option}
                      handleChange={handleChangeEntrada}
                      key={option.title}
                    />
                  ))}
                {key === 'bebidas' &&
                  Bebidas.map((option) => (
                    <EventOption
                      option={option}
                      handleChange={handleChangeBebida}
                      key={option.title}
                    />
                  ))}
                {key === 'asado' && (
                  <>
                    {AsadoClassic.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                    {AsadoPremium.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                    {AsadoGourmet.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                    {AsadoEspecial.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                  </>
                )}
                {key === 'pizzas' && (
                  <>
                    {PizzaClassic.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                    {PizzaPremium.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                  </>
                )}
                {key === 'alPlato' && (
                  <>
                    {Cazuelas.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                    {Celiacos.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                    {Veggies.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                  </>
                )}
                {key === 'enSandwich' && (
                  <>
                    {Hamburguesas.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                    {Perniles.map((option) => {
                      return (
                        <EventOption
                          option={option}
                          handleChange={handleChangeMenu}
                          key={option.title}
                        />
                      );
                    })}
                  </>
                )}
              </>
            )}
            {visibleSections[key] && (
              <>
                {key === 'postres' &&
                  Postres.map((option) => {
                    return (
                      <EventOption
                        option={option}
                        handleChange={handleChangePostre}
                        key={option.title}
                      />
                    );
                  })}
                {key === 'aPedido' &&
                  MenuAPedido.map((option) => {
                    return (
                      <EventOption
                        option={option}
                        handleChange={handleChangeMenu}
                        key={option.title}
                      />
                    );
                  })}
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
