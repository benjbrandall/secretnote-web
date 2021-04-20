import React from 'react';
import Note from './components/note'
import New from './components/new'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnNavbar } from './components/snnavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (

      <div className="App">   
        <SnNavbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={New} />
            <Route exact path='/:id' component={Note} />
          </Switch>
        </BrowserRouter>

      </div>
    )

export default App;
