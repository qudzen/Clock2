import './v.css'
import { useEffect, useState } from 'react'
import { format, differenceInSeconds } from 'date-fns'

function F() {

  const [toDate, setToDate]  = useState(new Date())
  const [fromDate, setFromdate] = useState(new Date())
  const [raznicaDate, setRaznicaDate] = useState(differenceInSeconds(toDate, fromDate))
  

  useEffect(() => {
    const a = new Date()
    setToDate(a)
    setFromdate(new Date(a.getTime() - 3600000))
  }, [])
  
  useEffect(() => {
      if ((toDate.getTime() - fromDate.getTime()) > 1000){
        setRaznicaDate(differenceInSeconds(toDate, fromDate));
      }
      else{
        setToDate(new Date(toDate.getTime() + 1000))
      }

    }, [toDate, fromDate]);
  
  const Wheelll = (e) => {
    if (e.deltaY < 0) {
        tapplus();
      } else {
        tapminus();
      }
  }
  const tapplus = () => {
    console.log('tapplus')
    const newDifference = ((toDate.getTime() - fromDate.getTime()) / 2)


      setToDate(new Date(toDate.getTime() + newDifference)); 
      setFromdate(new Date(fromDate.getTime() - newDifference))


  };

  const tapminus = () => { console.log('tapminus')
      const newDifference = (toDate.getTime() - fromDate.getTime()) / 4;
      setFromdate(new Date(fromDate.getTime() + newDifference))
      setToDate(new Date(toDate.getTime() - newDifference));
    }

 
  return (
    <>
      <div className='container2'>
        <div className='count2' onWheel={Wheelll}>{format(fromDate, 'dd.MM.yyyy HH.mm.ss')}</div>
        <div className='count2' onWheel={Wheelll}>{format(toDate, 'dd.MM.yyyy HH.mm.ss')}</div>
      </div>    
    </>
  )
}

export default F