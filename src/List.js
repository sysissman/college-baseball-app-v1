import React, { Component } from 'react'
import { Frame417 } from './ui-components';
import { SchoolsList } from './ui-components';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';

class List extends Component {
  render(){
      return (<Slist />);
  }
}
function Slist() {
  return (
        <AmplifyProvider>
          
        {<div className="list">
        
          <h1>Schools</h1>
         
          <p>
          <SchoolsList />
          </p>
          
          <center>
          <p>
          <Frame417 />
          </p>
          </center>
        </div> }

        
        </AmplifyProvider>
        
      );
    
  }
  
  export default List;



  