import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./State/Store"
import Navbars from './Navbar';
import Cart from './Cart';
import History from './History';
import Login from './Login';
import Signup from './Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
    <Provider store={store}>
      
    <Router>    
  <Routes>
  <Route exact path='/' element={<Login/>}/>
  <Route exact path='/History' element={<History/>}/>
 <Route exact path='/App' element={<App/>}/>
 <Route exact path='/Signup' element={<Signup/>}/>
 <Route exact path='/Cart' element={<Cart/>}/>
  </Routes>
 </Router>
    
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
