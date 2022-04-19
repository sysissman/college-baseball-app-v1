import React, { Component } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import GInput from './GInput'
import List from './List';

class App extends Component {
  
  render() {
    
    return (
        <div className="App">
          
          <Routes>
          {/* <Route exact path='/' element={<></>}/> */}
            <Route exact path='/generalinput' element={<GInput/>} />
            <Route exact path='/list' element={<List/>} />
          </Routes>
        </div>
    );
}
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import Amplify from 'aws-amplify';
// import "@aws-amplify/ui-react/styles.css";
// import {AmplifyProvider} from "@aws-amplify/ui-react";
// import awsconfig from './aws-exports';
// import { SchoolsList } from './ui-components';
// import { Frame417 } from './ui-components';
// import { GeneralInput } from './ui-components';
// Amplify.configure(awsconfig);


// function App() {
//   return (
//     <AmplifyProvider>
      
//     {/* <div className="App">
//       <h1>Schools</h1>
//       <p>
//       <SchoolsList />
//       </p>
//       <p>
//         <Frame417 />
//       </p>
//     </div> */}
//     <div className="App">
      
//       <p>
//       <GeneralInput />
//       </p>
      
//     </div>
//     </AmplifyProvider>
    
//   );
// }

// export default App;


   
