import './time.css'
import { format, addDays, subDays } from 'date-fns'
import { useEffect, useState } from 'react'


function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  
  useEffect(() => {
    const timerID = setInterval(() => {
        setCurrentTime(new Date())
    }, 1000);


    return() => {
    clearInterval(timerID)
  }

  }, []);


  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const dater = setInterval(() => {
        setCurrentDate(new Date())
    }, 24 * 60 * 60 * 1000);


    return() => {
    clearInterval(dater)
  }
  }, []);


  const minusDay = () => {setCurrentDate(subDays(currentDate, 1))}
  const plusDay = () => {setCurrentDate(addDays(currentDate, 1));}

  const handlWheel = (e) => {
    if (e.deltaY < 0) {
      plusDay();
    } else {
      minusDay();
    }
  }

  return (
    <>
      
      <div className = 'clock' onWheel={handlWheel}>
        {format(currentDate, 'dd.MM.yyyy')}
      </div>
      <div className='clock'>
        {format(currentTime, 'HH.mm.ss')}
      </div>
      <button onClick = {minusDay}>назад</button>
      <button onClick={plusDay} >вперед</button>
    </>
  )
}

export default Time


