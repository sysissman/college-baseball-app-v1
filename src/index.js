
   
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsConfig from './aws-exports';
import { BrowserRouter } from 'react-router-dom'

Amplify.configure(awsConfig);

ReactDOM.render(
    <React.StrictMode>
       <BrowserRouter>
        <AmplifyProvider>
            <App/>
        </AmplifyProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);