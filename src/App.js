import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';


import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Main />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
