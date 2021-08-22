import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Work from "./pages/Work";
import FarmProducts from "./pages/FarmProducts";
import About from "./pages/About";
import AppBar from "./AppBar";
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
    <Router>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppBar/>
        </Grid>
        <Grid item xs={12}>
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/farm-products">
            <FarmProducts />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
    </div>
  );
}

export default App;
