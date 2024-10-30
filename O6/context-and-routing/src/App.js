import logo from './logo.svg';
import './App.css';
import CounterProvider from './providers/CounterProvider';
import B from './components/B';

function App() {
  return (
    <CounterProvider>
      <B/>
    </CounterProvider>
  );
}

export default App;
