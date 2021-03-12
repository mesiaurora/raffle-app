import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './PageComponents/Header';
import Footer from './PageComponents/Footer';
import SetUpRaffle from './Components/SetUpRaffle';
import AboutKea from './Components/AboutKea';
import Results from './Components/Results';
import './Styles/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    /*
      TODO: Padding for submit button
      TODO: Raffle settings
      TODO: Fix form so it adds input
      TODO: Button colours•
      TODO: new number, if empty, always 1
      */

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
