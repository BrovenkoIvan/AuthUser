import React, {useEffect} from 'react';
import Routes from './src/navigator/Routes';
import { Provider } from 'react-redux'
import store from './src/redux/reducers'
import ConnectyCube from 'react-native-connectycube';

const App = () => {
  const CREDENTIALS = {
    appId: 4069,
    authKey: 'u62ZqzXfRdR3JWY',
    authSecret: 'CD9OGQj7UfsfLkF',
  };
  useEffect(() => {
    ConnectyCube.init(CREDENTIALS);
  });

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
