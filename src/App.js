import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks=['jasim','dipjol','bapparaz','manna'];
  return (
    <div className="App">
      
      <MovieCounter></MovieCounter>

      <Nayok name={nayoks[0]} job="Actor"></Nayok>
      <Nayok name= "Shakib khan"></Nayok>
      <Nayok name= {nayoks[1]}></Nayok>
      <Nayok name="BappaRaz"></Nayok>
      <header className="App-header">
        
      </header>
    </div>
  );
}

function Nayok(props){
  console.log(props);
  const nayokStyle = {
    border: '2px solid red',
    margin: '20px'
  }
  return (<div style={nayokStyle}>
    <h1>Hero: {props.name}</h1>
    <h3>Job:{props.job || 'Hero'}</h3>
  </div>)
}


function MovieCounter(props){
  const [count,setCount] = useState(0);

  const handleClick = () =>{
    setCount(count+1);
  }
  const handleRemove = () =>{
    setCount (count -1);
  }
  return (
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <button onClick={handleRemove}>Remove</button>
      <h3>Number of Movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return <h4>No of movies i acted: {props.movies}</h4>
}

export default App;
