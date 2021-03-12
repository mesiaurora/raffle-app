import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './PageComponents/Header';
import Footer from './PageComponents/Footer';
import SetUpRaffle from './Pages/SetUpRaffle';
import AboutKea from './Pages/AboutKea';
import Results from './Pages/Results';
import './Styles/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [winners, setWinners] = useState([])

  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={SetUpRaffle} exact />
          <Route path="/setupraffle" component={SetUpRaffle} exact />
          <Route path="/aboutKea" component={AboutKea} exact />
          <Route path="/results" component={Results} exact/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
