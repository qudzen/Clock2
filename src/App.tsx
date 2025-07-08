import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import New from './New';
import './App.css'
import Time from './Time'

function App() {
  return (
    <>

      <Router>
         <div>
           <nav>
             <ul>
               <li>
                 <Link to="/">Главная</Link>
               </li>
               <li>
                 <Link to="/about">О нас</Link>
               </li>
             </ul>
           </nav>

           <Routes>
             <Route path="/" element={<Time />} />
             <Route path="/about" element={<New />} />
           </Routes>
         </div>
       </Router>
    </>
  )
}

export default App
