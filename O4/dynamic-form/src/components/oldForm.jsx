import { useState, useRef } from "react";

export default function Form() {

  const [inputs, setInputs] = useState({
    name: {
      input: '',
      isValidated: false
    },
    epost: {
      input: '',
      isValidated: false
    },
    favoriteColor: {
      input: '',
      isValidated: false
    },
    shoeSize: {
      input: 0,
      isValidated: false
    },
    favoriteCar: {
      input: false,
      isValidated: false
    },
    newsletter: {
      input: false
    }
  });
  console.log(inputs);

  const textFieldRef = useRef(null);
  
  const onChangeHandler = (e, input) => {
    if(input === 'newsletter') {
      setInputs(prevState => ({
        ...prevState,
        [input]: {
          ...prevState[input],
          input: e.target.checked
        }
      }))
    } else {
      setInputs(prevState => ({
        ...prevState,
        [input]: {
          ...prevState[input],
          input: e.target.value
        }
      }))

    }

    validateInput(input, e.target.value);
  }

  const validateInput = (input, value) => {
    if(input === 'name') {
      setInputs(prevState => ({
        ...prevState,
        [input]: {
          ...prevState[input],
          isValidated: value.length > 2
        }
      }))
    } else if(input === 'epost') {
      setInputs(prevState => ({
        ...prevState,
        [input]: {
          ...prevState[input],
          isValidated: value.length > 2 && value.includes('@')
        }
      }))
    } else if(input === 'favoriteColor') {
      setInputs(prevState => ({
        ...prevState,
        [input]: {
          ...prevState[input],
          isValidated: value.length > 0
        }
      }))
    } else if(input === 'shoeSize') {
      setInputs(prevState => ({
        ...prevState,
        [input]: {
          ...prevState[input],
          isValidated: value >= 24 && value <= 55
        }
      }))
    } else if(input === 'favoriteCar') {
      setInputs(prevState => ({
        ...prevState,
        [input]: {
          ...prevState[input],
          isValidated: value !== ''
        }
      }))
    }
  }

  const focusNextField = (e) => {
    if(e.key === 'Enter' && (inputs.name.isValidated || inputs.epost.isValidated || inputs.shoeSize.isValidated)) {
      textFieldRef.current.focus();
    }
  }

  // Sätt till formuläret så att input fälten fungerar och sidan inte laddas om vid keydown event
  const handleSubmit = (e) => e.preventDefault();

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label> <br/>
      <input id="name" type="text" value={inputs.name.input} onChange={(e) => onChangeHandler(e, 'name')} onKeyDown={focusNextField}/> <br/>
      {inputs.name.isValidated && 
        <>
          <label htmlFor="epost">Epost</label> <br/>
          <input id="epost" type="text" value={inputs.epost.input} onChange={(e) => onChangeHandler(e, 'epost')} ref={textFieldRef} onKeyDown={focusNextField}/> <br/>
        </>
      }
      {inputs.epost.isValidated && 
        <>
          <label htmlFor="favoriteColor">Favorite Color</label> <br/>
          <select id="favoriteColor" value={inputs.favoriteColor.input} onChange={(e) => onChangeHandler(e, 'favoriteColor')} ref={textFieldRef}>
            <option value=""></option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <br/>
        </>
      }
      {inputs.favoriteColor.isValidated &&
        <>
          <label htmlFor="shoeSize">Shoe size</label> <br/>
          <input id="shoeSize" type="number" value={inputs.shoeSize.input} onChange={(e) => onChangeHandler(e, 'shoeSize')} onKeyDown={focusNextField}/> <br/>
        </>
      }
      {inputs.shoeSize.isValidated &&
        <>
        <fieldset>
            <legend>Favorite car:</legend>
            <div>
              <input type="radio" id="volvo" value="volvo" checked={inputs.favoriteCar.input === 'volvo'} onChange={(e) => onChangeHandler(e, 'favoriteCar')} ref={textFieldRef} />
              <label htmlFor="volvo">Volvo</label>
            </div>
            <div>
              <input type="radio" id="volkswagen" value="volkswagen" checked={inputs.favoriteCar.input === 'volkswagen'} onChange={(e) => onChangeHandler(e, 'favoriteCar')} />
              <label htmlFor="volkswagen">Volkswagen</label>
            </div>
            <div>
              <input type="radio" id="toyota" value="toyota" checked={inputs.favoriteCar.input === 'toyota'} onChange={(e) => onChangeHandler(e, 'favoriteCar')} />
              <label htmlFor="toyota">Toyota</label>
            </div>
          </fieldset>
        </>
      }
      {inputs.favoriteCar.isValidated &&
        <>
          <label htmlFor="newsletter">Subscribe Newsletter</label> <br/>
          <input id="newsletter" type="checkbox" value={inputs.newsletter.input} onChange={(e) => onChangeHandler(e, 'newsletter')}/> <br/>
        </>
      }
      {inputs.newsletter.input && <button onClick={(e) => alert('bra jobbat')}>Confirm</button>}
    </form>
  )
}