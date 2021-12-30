import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks,setNayoks] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res=> res.json())
    .then (data=> setNayoks(data))
  } , [])


  // const nayoks=[{name:'jasim', age:45, BestMovie:'KGF'},{name:'dipjol', age: 56, BestMovie:'K3G'},{name:'bapparaz', age:45,BestMovie:'3 Idiots'},{name:'manna', age: 34,BestMovie:'Koti takar kabin'},{name:'Alomgir', age:66}];


  return (
    <div className="App">
      
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nayok => <Nayok name={nayok.name} email={nayok.email} username={nayok.username}></Nayok> )
      }

      
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
    <h1>Name: {props.name}</h1>
    <h3>Email:{props.email || '100'}</h3>
    <h3>User Name: {props.username}</h3>
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
