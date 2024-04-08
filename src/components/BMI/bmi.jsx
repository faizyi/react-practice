import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import './bmi.css'
export default function Bmi() {
    const [loader, setLoader] = useState(false);
    const weightRef = useRef(null)
    const heightRef = useRef(null)
    const [allBMI, setAllBMI] = useState([]);
    let bmiArry = [];
    useEffect(()=>{
        const bmi = localStorage.getItem('bmi');
        if(bmi !== null){
            // setAllBMI(JSON.parse(BMI))
            bmiArry = JSON.parse(bmi)
        }
        // setLoader(false)
    },[])
    const calculateBMI=(event)=>{
        event.preventDefault()
        // setLoader(true)
        // setTimeout(()=>{
            const date = new Date().toDateString();
            const height = heightRef.current.value;
            if(height > 20){
                setLoader(false)
                Swal.fire("Enter Correct Foot!");
            }else{
                const heightCen = (height * 30.48)
                const heightSqure = (heightCen * heightCen)
                const bmiValue = weightRef.current.value / heightSqure
                const value = (bmiValue * 10000).toFixed(2)
                bmiArry.push({
                    bmi : value,
                    date : date,
                })
                setAllBMI(bmiArry)
                localStorage.setItem('bmi', JSON.stringify(bmiArry));
                // setLoader(false)
                weightRef.current.value = ''
                heightRef.current.value = ''
            }
        // },2000)

    }
    // console.log(allBMI);
  return (
    <div className="container">
    <form onSubmit={calculateBMI} className="calculator">
    <h1>BMI Calculator</h1>
      <label htmlFor="weight">Weight (kg):</label>
      <input required type="number" id="weight" placeholder="Enter your weight" ref={weightRef} />
      <label htmlFor="height">Height (foot):</label>
      <input required type="number" id="height" placeholder="Enter your height"  ref={heightRef}/>
      {loader ? <div className='loader-container'><div className='loader'></div></div> :
      <button type='submit'>Calculate</button>}
    </form>
    {
        allBMI.map((data,id)=>{
            return <div key={id}><p>{data.bmi}</p></div>
        })
    }
  </div>
  )
}
