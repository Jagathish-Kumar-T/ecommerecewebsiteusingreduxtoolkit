import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/cart" Component={Cart}></Route>
     </Routes>
     </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
