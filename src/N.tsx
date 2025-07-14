import './n.css'
import { useEffect, useState } from 'react'
import { format, differenceInSeconds } from 'date-fns'

function N() {

  const [toDate, setToDate]  = useState(new Date())
  const [fromDate, setFromdate] = useState(new Date())

  const [count, setCount] = useState(2);
  const [spisok, setSpisok] = useState([])

  const [counter, setCounter] = useState(2);
  

  useEffect(() => {
    const a = new Date()
    setToDate(a)
    setFromdate(new Date(a.getTime() - 1000))
  }, [])
  
  useEffect(() => {
    const diff = toDate.getTime() - fromDate.getTime();
    if (Math.abs(diff) < 1000) {
      setToDate(new Date(fromDate.getTime() + (diff >= 0 ? 1000 : -1000)));
    }
  }, [fromDate, toDate]);
  
  const Wheelll = (e) => {
    if (e.deltaY < 0) {
        degree()
        tapplus();
      } else {
        division()
        tapminus();
      }
  }
  const tapplus = () => {
    setCounter(prevCounter => {
    const newCounter = prevCounter + 1;
//    const newDifference = 500
    if (counter <= 5){
      setToDate(new Date(toDate.getTime() + 500)); 
      setFromdate(new Date(fromDate.getTime() - 500))

    }
    if (counter > 5 && counter < 60){
      setToDate(new Date(toDate.getTime() + ((toDate.getTime() - fromDate.getTime()) / 2))); 
      setFromdate(new Date(fromDate.getTime() - ((toDate.getTime() - fromDate.getTime()) / 2)))

    }
    console.log(newCounter)
    return newCounter;
  })


  };

  const tapminus = () => { 
    setCounter(prevCounter => {
    const newCounter = prevCounter - 1;
    if (counter <= 5){
      setFromdate(new Date(fromDate.getTime() + 500))
      setToDate(new Date(toDate.getTime() - 500));
    }
    if (counter <= 2){
      setCounter(1)
    }
    else{
      const newDifference = (toDate.getTime() - fromDate.getTime()) / 4;
      setFromdate(new Date(fromDate.getTime() + newDifference))
      setToDate(new Date(toDate.getTime() - newDifference));

    }
    console.log(newCounter)
    return newCounter;
  });
    }
    

  const degree = () => {
    if (count < 10000 && counter < 5){
      setCount(prevCount => prevCount + 1)
    }
    if (counter === 5){
      setCount(prevCount => prevCount * 2)
    }
    else{
      setCount(prevCount => prevCount)
    }
  };

  const division = () => {
    if (count > 1 && counter <= 5){
      setCount(prevCount => prevCount - 1)
    }
    if (counter === 1){
      setCount(prevCount => prevCount)
    }
    if (counter === 6){
      setCount(prevCount => prevCount / 2)
    }
    else{
      setCount(prevCount => prevCount)
    }

  };
  useEffect(() => {
    const newSpisok = Array.from({length: count}, (_, x) => x + 1)
    setSpisok(newSpisok)
  }, [count])


  const handlWheelDiv = (e) => {
    if (e.deltaY < 0) {
      degree();
      tapplus()
    } else {
      division();
      tapminus();
    }
  }
 
    const [cellwidth, setCellWidth] = useState(600);
    useEffect(() => {
      const pixel = 600 / count
      setCellWidth(pixel)
    }, [count])



 
  return (
    <>
      <div className='container2'>
        <div className='count2' onWheel={Wheelll}>{format(fromDate, 'dd.MM.yyyy HH.mm.ss')}</div>
        <div className='count2' onWheel={Wheelll}>{format(toDate, 'dd.MM.yyyy HH.mm.ss')}</div>
      </div>
      <div className='containerDiv' onWheel={handlWheelDiv}>{spisok.map(s => (<div className='square' style={{width: cellwidth}}></div>))}</div>    
    </>
  )
}

export default N