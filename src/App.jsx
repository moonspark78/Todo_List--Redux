
import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {


  return (
    <Provider store={store}>
      <p className=' text-7xl text-blue-600 text-center'>Hello Developer</p>
    </Provider>
  
  )
}

export default App
