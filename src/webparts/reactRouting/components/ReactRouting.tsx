import * as React from 'react';
import styles from './ReactRouting.module.scss';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './navBar/NavBar';
import formularioAuto from './pages/FormularioAuto';
import About from './pages/About';
import { Fragment } from 'react';


const ReactRouting = () => {
  return (
    <HashRouter>
      <NavBar />
      <div className={styles.container}>
        <Switch>
          <Route exact={true} path='/' render={props => (
            <Fragment>
              <h1>Hola soy la pagina inicial</h1>
            </Fragment>
          )} />

          <Route  path='/formularioAuto' component={formularioAuto} />
          <Route  path='/about' component={About} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default ReactRouting
