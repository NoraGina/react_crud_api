import {Route, Routes} from 'react-router-dom';
import CreateProduct from './components.js/CreateProduct';
import Home from './components.js/Home';
import Products from './components.js/Products';

const App = ()=> {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='products' element={<Products/>}/>
        <Route path ='createProduct' element={<CreateProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
