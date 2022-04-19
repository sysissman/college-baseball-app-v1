import React, { Component } from 'react'
import { GeneralInput } from './ui-components';
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";
import logo from './logo.svg';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';

class GInput extends Component {
  render(){
      return (<Geninput />);
  }
}




  function Geninput() {
   
    return (
          <AmplifyProvider>
            
          
          <div className="GInput">
            <center>
            <p>
            <GeneralInput />
            </p>
            </center>
          </div>
          </AmplifyProvider>
          
        );
    }



export default GInput;