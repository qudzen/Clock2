import './v.css'
import { useEffect, useState } from 'react'
import { format, differenceInSeconds } from 'date-fns'

function V() {

  const [toDate, setToDate]  = useState(new Date())
  const [fromDate, setFromdate] = useState(new Date())
  const [raznicaDate, setRaznicaDate] = useState(differenceInSeconds(toDate, fromDate))
  const [count, setCount] = useState(100000)
  const [count2, setCount2] = useState(101000)
  const [raznica, setRaznica] = useState(count2 - count)
  

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


  
    useEffect(() => {
    setCount(fromDate.getTime())
  }, [fromDate])
  useEffect(() => {
      setCount2(toDate.getTime())
  }, [toDate])

  useEffect(() => {
    if ((count2 - count) > 1){
      setRaznica(count2 - count);
    }
    else{
      setCount2(toDate.getTime() + 1)
    }
  }, [count, count2]);
 
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

export default V