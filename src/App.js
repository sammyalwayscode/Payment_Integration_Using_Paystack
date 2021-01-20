// import logo from './logo.svg';
// import './App.css';

import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PayNow } from "./Components/Contact/PayNow";
import Thanks from "./Components/About/Thanks";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/paynow" exact component={PayNow} />
          <Route path="/thanks" exact component={Thanks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
