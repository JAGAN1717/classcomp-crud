import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Userdata from './Components/UserData';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends Component{

  render(){
    return(<>
    <BrowserRouter>
     
     <Routes>
      <Route path='/' element = {<Userdata/>}/>
     </Routes>
    </BrowserRouter>
    
    </>)
  }

}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
