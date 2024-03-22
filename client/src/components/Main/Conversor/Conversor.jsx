import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { convert } from '../../../redux/slices/conversorSlices'

const Convertor = () => {
  return (
    <article id="convertor">
      <h1>convert</h1>
      <section id="petition">
        <select name="conversor" id="units">
          <option value="km-miles">km &rarr; miles</option>
          <option value="miles-km">miles &rarr; km</option>
          <option value="FT-m">FT &rarr; m</option>
          <option value="m-FT">m &rarr; FT</option>
          <option value="cm-inches">cm &rarr; inches</option>
          <option value="inches-cm">inches &rarr; cm</option>
        </select>

        <img src="/assets/whiteE.png" alt="white Exchange icon" />

        <input type="float" />
        <span>km</span>
      </section>

      <section id="answer">
        <img src="/assets/heart.png" alt="heart icon" />
        <h2>Resultado de la conversión</h2>
        <p>poner segunda parte de values</p>
      </section>
    </article>
  );
};

export default Convertor;
