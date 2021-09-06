import { Route, Switch } from 'react-router-dom';
import './App.css';
import UsersList from './components/UsersList';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersList} />
        <Route path="/*" component={ ErrorPage } /> 
      </Switch>
    </div>
  );
}

export default App;
