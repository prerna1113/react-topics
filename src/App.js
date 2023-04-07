

import './App.css';
import Navbar from './component/Api/Navbar';
import nav from './component/Api/Navbar';
import Profile from './component/Api/Profile';
import Input from './component/Parent-Child/Input';

// import Counterr from './Counterr';
// import Nav from './component/State-Api/Nav';
// import Profile from './component/State-Api/Profile';



// function Greeting(props){
//   return <h1>Hello {props.name}</h1>

// }

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Input />
      {/* <Profile/> */}
      {/* <Counterr/> */}
      {/* <Nav/>
      <Profile /> */}
      
    </div>
  );
}

export default App;
