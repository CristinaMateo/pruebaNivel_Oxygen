import { useState } from "react";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { convert } from '../../../redux/slices/conversorSlices'

const Convertor = () => {

  const [unit, setUnit] = useState("km");
  const [secUnit, setSecUnit] = useState("miles")
  const [factor, setFactor] = useState("km-miles")
  const [input, setInput] = useState("0")

  const changeUnits = (event) => {
    let units = event.target.value.split("-")
    setUnit(units[0])
    setSecUnit(units[1])
    setFactor(event.target.value)
  }
  const result = useSelector((state) => state.conversor.value)
  const dispatch = useDispatch()

  const saveConversion = async() => {
    const Save={
      nr1:input, 
      l1:unit, 
      nr2:result, 
      l2:secUnit  
    }
      
    try{
      await axios.post('http://localhost:3000/api/saved', Save);
      location.reload()
    } catch (error){
      console.error(error)
    }
    
  }


  return (
    
    <article id="conversor">
      <h1>convert</h1>
      <section className="petition">

        <article className="first">
        <select name="conversor" id="units" onChange={changeUnits}>
          <option value="km-miles">km &rarr; miles</option>
          <option value="miles-km">miles &rarr; km</option>
          <option value="FT-m">FT &rarr; m</option>
          <option value="m-FT">m &rarr; FT</option>
          <option value="cm-inches">cm &rarr; inches</option>
          <option value="inches-cm">inches &rarr; cm</option>
        </select>
        <img src="/assets/whiteE.png" alt="white Exchange icon" />
        </article>

        <article className="second">
        <input type="float" onChange={(e) => {
          setInput(e.target.value)
          dispatch(convert({
            input: Number(e.target.value),
            option: factor
          }))
        }} />
        <p>{unit}</p>
        </article>

      </section>

      <section className="answer">
        <img src="/assets/heart.png" alt="heart icon" onClick={saveConversion} />
        <span>
        <h2>{result}</h2>
        <p>{secUnit}</p>
        </span>
      </section>
    </article>
  );
};

export default Convertor;
