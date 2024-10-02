import './App.css';
import { useState } from 'react';

function App() {

  const [age, setAge] = useState(0);

  const handleAgeInput = (e) => {
    setAge(Number(e.target.value));
  }
  console.log(age);
  

  return (
    <div className="App">
      <h1>Danslektion</h1>
      <form>
        <label>
          Namn
          <input type='text'/>
        </label>
        <br/>
        <label>
          Email
          <input type='text'/>
        </label>
        <br/>
        <label>
          Age
          <input id="ageInput" type='number' onChange={handleAgeInput}/>
        </label>
        <br/>
        {age > 0 && (isNaN(age) || age < 4 || age > 75) ? <div>Du kan inte anmäla dig eftersom du är {age} gammal, tyvärr.</div> : null}
        {age < 18 ? 
        <>
        <label>
          <input type='checkbox'/>
          Jag som målsman anmäler mitt barn
        </label>
        <br/> 
        </>
        : null}
        <button>Skicka</button>
      </form>
    </div>
  );
}

export default App
