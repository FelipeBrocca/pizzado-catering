import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import ConfirmEvent from "./ConfirmEvent";
import EventOption from "./EventOption";
import { EventContext } from "../../Context/EventContext";
import "./EventsForm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const EventsForm = () => {
  const {
    handleChangeBebida,
    handleChangeEntrada,
    handleChangeMenu,
    handleChangePostre,
    infoToSend,
  } = useContext(EventContext);

  const [visibleSections, setVisibleSections] = useState({});
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_MENU_DATA_API_URL}/menus/by_category`
        );
        const data = response.data;
        setMenuData(data);

        // Inicializar visibilidad dinámica
        const initialVisibility = Object.keys(data).reduce((acc, key) => {
          acc[key] = key === "A Pedido"; // solo "A Pedido" en true
          return acc;
        }, {});
        setVisibleSections(initialVisibility);
      } catch (error) {
        console.error("Error fetching menu data", error);
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

  const ExpandIcon = () => <FontAwesomeIcon icon={faChevronDown} />;
  const CollapseIcon = () => <FontAwesomeIcon icon={faMinus} />;

  return (
    <form className="form-register" id="form-event">
      <fieldset className="form-register-input">
        <legend>
          Diseñá tu menú.
          <br />
          <small>(Todos los precios son por persona)</small>
        </legend>

        {Object.entries(menuData).map(([title, options]) => (
          <div
            className={`combo-section ${
              visibleSections[title] ? "combo-section-visible" : ""
            }`}
            key={title}
          >
            <div
              className="combo-header"
              onClick={() => toggleVisibility(title)}
            >
              <h3>{title}</h3>
              {visibleSections[title] ? <CollapseIcon /> : <ExpandIcon />}
            </div>
            {visibleSections[title] && (
              <>
                {options.map((option) => (
                  <EventOption
                    option={option}
                    handleChange={
                      title === "Bebidas"
                        ? handleChangeBebida
                        : title === "Postres"
                        ? handleChangePostre
                        : title === "Entradas"
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
        ""
      )}

      <br />
      Resolvé todas tus dudas por Whatsapp
    </form>
  );
};

export default EventsForm;
