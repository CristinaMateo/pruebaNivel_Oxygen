import React from "react";

const Card = ({ saved }) => {
  if (!saved) {
    return null;
  }

  return (
    <article className="card" key={saved.id}>
      <p>{saved.name}</p>
    </article>
  );
};

export default Card;
