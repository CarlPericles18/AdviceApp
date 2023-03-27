import React, { useEffect } from "react";
import lineImg from '../public/images/pattern-divider-mobile.svg'
import diceImg from '../public/images/icon-dice.svg'
import './App.css'
export default function App(){
    const [getAdvice, setGetAdvice] = React.useState([])
  
    const fetchAdvice = async() => {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data= await res.json()
        setGetAdvice(data.slip)
        }

        useEffect(()=>{
            fetchAdvice()
        },[])

    return(
        <div className="advice-card">
            <div className="card-container">
                <p>Advice # {getAdvice.id}</p>
                <h2>{getAdvice.advice}</h2>
                <picture>
                <img src={lineImg} alt='LineImg'/>
                </picture>
                <button id="generate-btn">
                <img onClick={fetchAdvice} src={diceImg} alt='diceImg'/> 
                </button>
            </div>
        </div>
    )
}