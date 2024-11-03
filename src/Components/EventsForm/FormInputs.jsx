import React, { useRef, useContext } from 'react';
import { EventContext } from '../../Context/EventContext';

const FormInputs = () => {
  const { setInfoToSend, infoToSend } = useContext(EventContext);

  const nameRef = useRef();
  const dateRef = useRef();

  const setInfo = () => {
    setInfoToSend({
      ...infoToSend,
      name: nameRef.current.value,
      date: dateRef.current.value,
    });
  };

  return (
    <>
      <div className="form-register-input">
        <input
          type="text"
          ref={nameRef}
          onChange={setInfo}
          name="name"
          id="name"
          placeholder="Nombre"
          autoComplete="off"
        />
      </div>
      <div className="form-register-input">
        <input
          type="date"
          ref={dateRef}
          onChange={setInfo}
          dateformat="dd/MM/yyyy"
          min="2023-01-01"
          className="date-event"
        />
      </div>
    </>
  );
};

export default FormInputs;
