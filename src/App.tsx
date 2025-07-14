import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import New from './New';
import Time from './Time'
import Vasa from './Vasa'
import V from './V'
import F from './F'
import N from './N'

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
               <li>
                 <Link to="/V">V</Link>
               </li>
               <li>
                 <Link to="/F">F</Link>
               </li>
               <li>
                 <Link to="/N">N</Link>
               </li>
             </ul>
           </nav>

           <Routes>
             <Route path="/" element={<Time />} />
             <Route path="/about" element={<New />} />
             <Route path="/X" element={<Vasa />} />
             <Route path="/V" element={<V />} />
             <Route path="/F" element={<F />} />
             <Route path="/N" element={<N />} />
           </Routes>
         </div>
       </Router>
    </>
  )
}

export default App
