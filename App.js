import { Provider } from 'react-redux';
import './App.css';
import CheckUser from './FormAuth/CheckUser';
import store from './Config/redux/Store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <CheckUser />
    </Provider>
    </div>
  );
}

export default App;
