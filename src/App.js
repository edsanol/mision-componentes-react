import './App.css';
import { useState } from 'react';

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}
const Subtitle = ({counter}) => {
  return (
    <h2>{counter}</h2>
  )
}
const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

function App() {
  const [ counter, setCounter ] = useState(0)

  const increment = () => setCounter(counter + 1)

  return (
    <div>
      <Title text={"Contador"}/>
      <Button text={"Botón"} handleClick={increment}/>
      <Subtitle counter={counter}/>
    </div>
  );
}

export default App;
