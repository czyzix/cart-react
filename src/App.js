import Cart from './components/cart/cart.js';
import Shop from './components/shop/shop.js';
import Navbar from './components/navbar/navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data.js';

function App() {

  const {products} = data;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/">
              <Shop products={products}></Shop>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
