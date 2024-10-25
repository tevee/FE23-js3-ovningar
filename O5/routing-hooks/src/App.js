import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './components/Home.jsx';
import Counter from './components/Counter.jsx';
import Timer from './components/Timer.jsx';
import PageNotFound from './components/PageNotFound.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          [
            <NavLink to="/" className={({isActive}) => isActive ? 'activePageLink' : undefined}>Home</NavLink> |&nbsp; 
            <NavLink to="/counter" className={({isActive}) => isActive ? 'activePageLink' : undefined}>Counter</NavLink> |&nbsp; 
            <NavLink to="/timer" className={({isActive}) => isActive ? 'activePageLink' : undefined}>Timer</NavLink>
          ]
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/timer" element={<Timer/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
