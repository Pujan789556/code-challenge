import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

const ListMovies = React.lazy(() => import('./components/ListMovies'));
const MovieDetail = React.lazy(() => import('./components/MovieDetail'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class App extends Component {
    render() { 
  return (
    <div className="App">
      <Header />
      <Container>
            <HashRouter>
            <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path='/' name="ListMovies" render={props => <ListMovies {...props}/>} />
              <Route exact path="/:imdbID" name="MovieDetail" render={props => <MovieDetail {...props}/>} />
            </Switch>
          </React.Suspense> 
      </HashRouter>
            </Container>
      <Footer />
    </div>
  );
}
}

export default App;
