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
      data =>setproducts(data)
          
    )
    
  }, [])
  var productsarray = []
  for(var i in products)
    console.log(products[i]);
    productsarray.push([i, products[i]]);    
  console.log(productsarray);
  return (
    
    <div>  
        <h1>{productsarray}</h1>
        
    </div>
    
  );
}

export default App;
