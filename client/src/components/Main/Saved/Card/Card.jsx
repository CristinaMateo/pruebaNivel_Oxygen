import React from "react";
import axios from 'axios';

const Card = ({ saved }) => {
  if (!saved) {
    return null;
  }

 const deleteSaved= async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:3000/api/saved/${saved.id}`)
    
  } 


  return (
    <article className="card" key={saved.id} id={saved.id}>
      <p>{saved.nr1} {saved.l1} &rarr; {saved.nr2} {saved.l2}</p>
      <img src="/assets/union.png" alt="cross" onClick={deleteSaved}/>
    </article>
  );
};

export default Card;
