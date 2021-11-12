import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Navbar, Products} from './components';
import { BrowserRouter as Route,Switch,Router } from 'react-router-dom';


const App = () => {
  const [products, setproducts] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data =>setproducts(data.data)

    )
    
  }, [])

  
  
  return (
    
    <div>  
        <Products products = {products} />
        
    </div>
    
  );
}

export default App;
