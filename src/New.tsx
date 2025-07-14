import React, { useEffect, useState } from 'react';
import "./new.css"
function LotsOfSquares() {
  const [count, setCount] = useState(1);
  const degree = () => {
    if (count < 10000){
      setCount(count * 2)}
  };

  const division = () => {
    if (count > 1){
      setCount(count / 2)}
  };

  const reset = () => {setCount(1)}

  console.log(degree, division)





  const [spisok, setSpisok] = useState([])
  useEffect(() => {
    const newSpisok = Array.from({length: count}, (_, x) => x + 1)
    setSpisok(newSpisok)
  }, [count])
//  console.log(spisok)

  const handlWheel = (e) => {
    if (e.deltaY < 0) {
      degree();
    } else {
      division();
    }
  }

  const [screenWith, setScreenWith] = useState(window.innerWidth);
  useEffect(() => {
    const changeWith = () => {
      setScreenWith(window.innerWidth)
    }
    window.addEventListener('resize', changeWith)

    return () => {
      window.removeEventListener('resize', changeWith)
    }
  }, [])




  const [cellwidth, setCellWidth] = useState(screenWith);
  useEffect(() => {
    const pixel = screenWith / count
    setCellWidth(pixel)
  }, [screenWith, count])

//  console.log(cellwidth)
     return (
       <>
        <div className='container' onWheel={handlWheel}>{spisok.map(s => (<div className='square' style={{width: cellwidth}}>Привет</div>))}</div>

        <button onClick={degree}>**2</button>
        <button onClick={division}>/2</button>
        <button onClick={reset}>reset</button>
        <div>screenWith = {screenWith}</div>
        <div>cellwidth = {cellwidth}</div>
        <div>count = {count}</div>


       </>
      );
   }

   export default LotsOfSquares;