import Header from './components/header/header';
import MainBody from './components/mainBody/mainBody';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

import './App.css';

// Parse.setAsyncStorage(AsyncStorage);

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
    </div>
  );
}

export default App;
