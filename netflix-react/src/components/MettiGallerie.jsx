import React from 'react'
import {saghe} from '../dati/api';
import Galleria from './Galleria';
import { Link } from 'react-router-dom';

export default function MettiGallerie() {
  let sottoSaghe = sottoArray(saghe, Math.floor(Math.random() * (6 - 3 + 1)) + 3)
 
  return (
    <>
    {sottoSaghe.map(ele =>{
      console.log(ele);
      return <Galleria key={ele} saga={ele}/>
          
    })}     
    </>
  )
}
function sottoArray(arr, n) {
  let sottoArray = [];
  let arrClone = [...arr];
  for (let i = 0; i < n; i++) {
      sottoArray.push(arrClone.splice(Math.floor(Math.random() * arrClone.length), 1)[0]);  
  }    
  console.log(sottoArray, n);
  return sottoArray;  
}