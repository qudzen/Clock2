import './Vasa.css'
import { format, subHours, addHours, subMinutes, addMinutes, subSeconds, addSeconds } from 'date-fns'
import { useEffect, useState } from 'react'


function Vasa() {

  const startDate = new Date('2024-03-01T12:00:00')
  const [currentTime, setCurrentTime] = useState(startDate);

  const minusHours = () => {setCurrentTime(subHours(currentTime, 1))}
  const plusHours = () => {setCurrentTime(addHours(currentTime, 1));}

  const minusMinute = () => {setCurrentTime(subMinutes(currentTime, 1))}
  const plusMinute = () => {setCurrentTime(addMinutes(currentTime, 1));}

  const minusSecond = () => {setCurrentTime(subSeconds(currentTime, 1))}
  const plusSecond = () => {setCurrentTime(addSeconds(currentTime, 1));}

  const handlWheel = (e) => {
    if (e.deltaY < 0) {
      plusSecond();
    } else {
      minusSecond();
    }
  }

  const [newCurrentTime, setNewCurrentTime] = useState(startDate)
  const minusHours2 = () => {setNewCurrentTime(subHours(newCurrentTime, 1))}
  const plusHours2 = () => {setNewCurrentTime(addHours(newCurrentTime, 1));}

  const minusMinute2 = () => {setNewCurrentTime(subMinutes(newCurrentTime, 1))}
  const plusMinute2 = () => {setNewCurrentTime(addMinutes(newCurrentTime, 1));}

  const minusSecond2 = () => {setNewCurrentTime(subSeconds(newCurrentTime, 1))}
  const plusSecond2 = () => {setNewCurrentTime(addSeconds(newCurrentTime, 1));}

  const handlWheel2 = (e) => {
    if (e.deltaY < 0) {
      plusSecond2();
    } else {
      minusSecond2();
    }
  }

  return (
    <>
      

      <div className='clock2' onWheel={handlWheel}>
        {format(currentTime, 'HH.mm.ss')}
      </div>
      


      <div className='clock3' onWheel={handlWheel2}>
        {format(newCurrentTime, 'HH.mm.ss')}
      </div>
      
    </>
  )
}

export default Vasa


