import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import New from './New';
import './App.css'
import Time from './Time'
import Vasa from './Vasa'

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
               <li>
                 <Link to="/X">X</Link>
               </li>
             </ul>
           </nav>

           <Routes>
             <Route path="/" element={<Time />} />
             <Route path="/about" element={<New />} />
             <Route path="/X" element={<Vasa />} />
           </Routes>
         </div>
       </Router>
    </>
  )
}

export default App
