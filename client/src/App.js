import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PorductLayout from './pages/ProductLayout/PorductLayout';

function App() {
  return (
    <div>
      <header>
        <Link to='/'>Amazing Shop</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:slug' element={<PorductLayout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
