import { useReducer, useRef } from "react";

const formReducer = (state, action) => {
  switch(action.type) {
    case 'update_field':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          input: action.value
        }
      }
    case 'validate_field':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          isValidated: action.isValid
        }
      }
    default:
      return state;
  }
}

export default function Form() {
  const [inputs, dispatch] = useReducer(formReducer, {
    name: { input: '', isValidated: false },
    epost: { input: '', isValidated: false },
    favoriteColor: { input: '', isValidated: false },
    shoeSize: { input: 0, isValidated: false },
    favoriteCar: { input: '', isValidated: false },
    newsletter: { input: false }
  });

  const textFieldRef = useRef(null);
  console.log(inputs);

  // Validering för inputs
  // property name = själva input namnet
  // varje property har en anonym funktion som tar emot ett värde och returnerar en boolean
  const validationRules = {
    name: (value) => value.length > 2,
    epost: (value) => value.length > 2 && value.includes('@'),
    favoriteColor: (value) => value.length > 0,
    shoeSize: (value) => value >= 24 && value <= 55,
    favoriteCar: (value) => value !== '',
  };
  
  const onChangeHandler = (e, field) => {
    const value = field === 'newsletter' ? e.target.checked : e.target.value;
    dispatch({type: 'update_field', field, value});

    // validationRules[field](value) returnerar true eller false beroende på statement,
    // det andra värdet är ett default värde ifall field är undefined
    const isValid = validationRules[field] ? validationRules[field](value) : true;
    dispatch({type: 'validate_field', field, isValid});
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