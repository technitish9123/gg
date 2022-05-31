
import './App.css';
// import Header from './Layouts/Header';
import Main from './Pages/main';


import GamePage from './Pages/GamePage';
import DashBoard from "./Pages/Dashboard"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Error  from './Pages/Error';

const  App=()=> {
  return (
   
     <Router>
       
         <Routes>
           
           <Route path='/' element={<Main />} />
           <Route path="games" element={<GamePage />} />
           <Route path="dashboard" element={<DashBoard />} />
           <Route path= "*" element ={<Error />} />
         </Routes>
     </Router>

    

   
  );
}

export default App;
