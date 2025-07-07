import './time.css'
import { format } from 'date-fns'
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


  return (
    <>
      <div className = 'clock'>
        {format(currentTime, 'dd.MM.yyyy')}
      </div>
      <div className='clock'>
        {format(currentTime, 'HH.mm.ss')}
      </div>
    </>
  )
}

export default Time


