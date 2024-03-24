import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { convert } from '../../../redux/slices/conversorSlices'

const Convertor = () => {

  const [unit, setUnit] = useState("km");
  const [secUnit, setSecUnit] = useState("miles")
  const [factor, setFactor] = useState("km-miles")

  const changeUnits = (event) => {
    let units = event.target.value.split("-")
    setUnit(units[0])
    setSecUnit(units[1])
    setFactor(event.target.value)
  }
  const count = useSelector((state) => state.conversor.value)
  const dispatch = useDispatch()

  const saveConversion = () => {
    console.log("Saved")
  }


  return (
    <article id="conversor">
      <h1>convert</h1>
      <section id="petition">
        <select name="conversor" id="units" onChange={changeUnits}>
          <option value="km-miles">km &rarr; miles</option>
          <option value="miles-km">miles &rarr; km</option>
          <option value="FT-m">FT &rarr; m</option>
          <option value="m-FT">m &rarr; FT</option>
          <option value="cm-inches">cm &rarr; inches</option>
          <option value="inches-cm">inches &rarr; cm</option>
        </select>

        <img src="/assets/whiteE.png" alt="white Exchange icon" />

        <input type="float" onChange={(e) => {
          dispatch(convert({
            input: Number(e.target.value),
            option: factor
          }))
        }} />
        <span>{unit}</span>
      </section>

      <section id="answer">
        <img src="/assets/heart.png" alt="heart icon" onClick={saveConversion} />
        <h2>{count}</h2>
        <p>{secUnit}</p>
      </section>
    </article>
  );
};

export default Convertor;
