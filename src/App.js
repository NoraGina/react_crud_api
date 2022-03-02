import {Route, Routes} from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Home from './components/Home';
import Products from './components/Products';
import UpdateProduct from './components/UpdateProduct'

const App = ()=> {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='products' element={<Products/>}/>
        <Route path ='createProduct' element={<CreateProduct/>} />
        <Route
          path='products/:productId' element={<UpdateProduct/>} 
        />
      </Routes>
    </div>
  );
}

export default App;
