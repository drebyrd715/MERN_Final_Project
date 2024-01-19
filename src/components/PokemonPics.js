import React from "react";

// destructure and give props
const PokemonPics = ({ id, name, image, type }) => {
  const style = `Pic-box ${type}`;
  return (
    <div className={style}>
      <div className="number">
        <h5>#0{id}</h5>
      </div>
      <img src={image} alt={name} />
      <div className="detail">
        <h3>{name}</h3>
        <h4>Type: {type}</h4>
      </div>
    </div>
  );
};

export default PokemonPics;

