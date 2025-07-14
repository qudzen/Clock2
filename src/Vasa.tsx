import './Vasa.css'
import { useEffect, useState } from 'react'
import { format, addDays, subDays, differenceInSeconds } from 'date-fns'


function Vasa() {
  const [count, setCount] = useState(100000)
  const [count2, setCount2] = useState(101000)
  const [raznica, setRaznica] = useState(count2 - count)

  useEffect(() => {
    if ((count2 - count) > 1){
      setRaznica(count2 - count);
    }
    else{
      setRaznica(1)
    }
  }, [count, count2]);

  const tapplus = () => {
//    if ((count + (count - count2) / 2) > 0){
    const newDifference = ((count2 - count) / 2)
    const newDifference2 = ((count2 - count) / 2);
    setCount2(count2 + newDifference); 
    setCount(count - newDifference2)
  };

  const tapminus = () => {
    if (raznica > 1){
      const newDifference = (count2 - count) / 4;
      setCount(count + newDifference);
      setCount2(count2 - newDifference);
    }
    else{
      setRaznica(1)
    }
    
  };
const [fromDate, setFromdate] = useState(new Date(count))
const [toDate, setToDate]  = useState(new Date(count2))
const [raznicaDate, setRaznicaDate] = useState(differenceInSeconds(toDate, fromDate))

useEffect(() => {
  setFromdate(new Date(count))
}, [count])
useEffect(() => {
  setToDate(new Date(count2))
}, [count2])

useEffect(() => {
    if (toDate > fromDate){
      setRaznicaDate(differenceInSeconds(toDate, fromDate));
    }
  }, [toDate, fromDate]);

const Wheelll = (e) => {
  if (e.deltaY < 0) {
      tapplus();
    } else {
      tapminus();
    }
}

 
  

  return (
    <>
      
      <div className='container'>
        <div className='count2'>
          {count}
        </div>

        <div className='raznica' onWheel={Wheelll}>
          {raznica}
        
        </div>

        <div className='count3'>
          {count2}
        </div>
      </div>
      <button onClick={tapplus}>*</button>
      <button onClick={tapminus}>/</button>


      <div className='container2'>
        <div className='count2'>{format(fromDate, 'dd.MM.yyyy HH.mm.ss')}</div>
        <div className='raznica'>{raznicaDate}</div>
        <div className='count2'>{format(toDate, 'dd.MM.yyyy HH.mm.ss')}</div>
      </div>

      
    </>
  )
}

export default Vasa


