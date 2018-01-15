import React from 'react';
import  {IndexRoute, Route, IndexRedirect } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CalculatorPage from './components/calculator/CalculatorPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/> 
        <Route path="calculator" component={CalculatorPage}/>
        <Route path="about" component={AboutPage}/>       
    </Route>
);