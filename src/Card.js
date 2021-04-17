import React from "react";

function Card({ d }) {
  const {
    name,
    origin,
    image,
    life_span,
    temperament,
    weight: { metric },
    description,
  } = d;

  return (
    <div className="card">
      {image ? <img src={image.url} alt="catImage" /> : null}
      <div className="info">
        <h2 style={{ fontWeight: "lighter" }}>{name}</h2>
        <h2>{origin}</h2>
        <p>
          <strong>Temperament: </strong>
          {temperament}
        </p>
        <p>
          <strong>Life Span: </strong> {life_span} years
        </p>
        <p>
          <strong>Weight: </strong>
          {metric} Kg
        </p>
        <p>
          <strong>Description: </strong>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
