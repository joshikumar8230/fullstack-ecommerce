import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home'
import Account from './components/account'
import Product from './components/product'
import Checkout from './components/checkout'
import Protected  from './components/protected'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
   <Route
   path="/home"
   element={
    <Protected>
      <Home />
    </Protected>
  }
/>  
<Route
  path="/home/account"
  element={
  <Protected>
  <Account />
  </Protected>
  }
/>

<Route
  path="/home/product"
  element={
  <Protected>
  <Product />
  </Protected>
  }
/>

<Route
  path="/home/product/checkout"
  element={
    <Protected>
    <Checkout />
    </Protected>
  }
/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
