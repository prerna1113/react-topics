

import './App.css';

// import Counterr from './Counterr';
import Nav from './component/State-Api/Nav';
import Profile from './component/State-Api/Profile';



// function Greeting(props){
//   return <h1>Hello {props.name}</h1>

// }

function App() {


  return (
    <div className="App">
      {/* <Counterr/> */}
      <Nav/>
      <Profile />
      
    </div>
  );
}

export default App;
