import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route,
  Switch} from 'react-router-dom';
import Explorer from './components/Explorer';
import Films from './components/Films';
import BaseLayout from './components/Layout';
import People from './components/People';
import Starships from './components/Starships';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Explorer} />
        <Route path='/characters' component={People} />
        <Route path='/starships' component={Starships} />
        <Route path='/films' component={Films} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>



,document.getElementById('root'));
registerServiceWorker();
