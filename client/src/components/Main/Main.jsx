import React from "react";
import { useEffect, useState } from "react";
import Conversor from './Conversor';
import Saved from './Saved';

const Main = () => {

  const [saved, setSaved] = useState([]);

  const getSaved = async () =>{
    try{
      const response = await axios.get('http://localhost:3000/api/saved');
      const data = response.data;
      setSaved(data)
    } catch (error){
      console.error("Error fetching saved conversions.")
    }
  }

useEffect(()=>{
  getSaved();
}, []);

  return (
    <main>
      <Conversor />
      <Saved savedList={saved}/>
    </main>
  );
};

export default Main;
