import React, { useEffect, useState } from 'react';
import "./new.css"
function LotsOfSquares() {
  const [count, setCount] = useState(1);
  const degree = () => {
    if (count < 10){
      setCount(count * 2)}
  };

  const division = () => {
    if (count > 1){
      setCount(count / 2)}
  };

  const reset = () => {setCount(1)}




  const [spisok, setSpisok] = useState([])
  useEffect(() => {
    const newSpisok = Array.from({length: count}, (_, x) => x + 1)
    setSpisok(newSpisok)
  }, [count])
  console.log(spisok)

  const handlWheel = (e) => {
    if (e.deltaY < 0) {
      degree();
    } else {
      division();
    }
  }


     return (
       <>
        <div className='container' onWheel={handlWheel}>{spisok.map(s => (<div className='square'>{s}</div>))}</div>



        <button onClick={degree}>**2</button>
        <button onClick={division}>/2</button>
        <button onClick={reset}>reset</button>
       </>
      );
   }

   export default LotsOfSquares;