import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Parameters from './pages/Parameters';
import NavBar from './components/Navbar';
import Error from './components/Error';
import { UserProvider } from './utils/context';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/params" element={<Parameters />} />
          <Route element={<Error/>}/>
        </Routes>
      </UserProvider>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
