import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Main from './pages/Main';
import CountryCard from './pages/CountryInfo';
import { useSelector } from 'react-redux';

const App = () => {
const isLoading = useSelector(state => state.countries.loading)
  return isLoading ? <></>: (
    <Router>
        <Routes>
            <Route path='/*' Component={Main}></Route>
            <Route path='/single/:name' Component={CountryCard}> </Route>
        </Routes>
    </Router>
  );
};

export default App;