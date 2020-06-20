import React from 'react';
import {SafeAreaView} from 'react-native';

import AppMain from './components/AppMain';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import goalsReducer from './store/reducers/goals';

const rootReducer = combineReducers({
  goals: goalsReducer,
});
const store = createStore(rootReducer);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <AppMain />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
