import React from 'react';

const EventOption = ({ option, handleChange }) => {
  return (
    <>
      <div>
        <label className="checkbox-style">
          <input
            type="checkbox"
            id="scales"
            name="option"
            onClick={() => handleChange(option)}
          />
          <span></span>
        </label>
        <div className="option-container">
          <label>{option.title}</label>
          {option.price ? <p>${option.price}</p> : <></>}
        </div>
      </div>
      {option.food ? (
        <ul className="menu-food-list">
          {option.food?.map((foodOpt) => {
            return <li key={`food - ${foodOpt}`}>{foodOpt}</li>;
          })}
        </ul>
      ) : (
        ''
      )}
      {option.starters && option.starters.length > 0 ? (
        <>
          <p>Entradas:</p>
          <ul className="menu-food-list">
            {option.starters?.map((foodOpt) => {
              return <li key={`entrada - ${foodOpt}`}>{foodOpt}</li>;
            })}
          </ul>
        </>
      ) : (
        ''
      )}
      {option.principal && option.principal.length > 0 ? (
        <>
          <p>Principal:</p>
          <ul className="menu-food-list">
            {option.principal?.map((foodOpt) => {
              return <li key={`principal - ${foodOpt}`}>{foodOpt}</li>;
            })}
          </ul>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default EventOption;
