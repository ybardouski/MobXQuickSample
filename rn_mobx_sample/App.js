/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import { Provider } from 'mobx-react';
// import TodoStore from './TodoStore';
import Home from './Home';

class App extends React.Component {
  render() {
    return <Home/>
    // return
    // <Provider todoStore={TodoStore} >
    //   <Home />
    // </Provider>
  }
}
