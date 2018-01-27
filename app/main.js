// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import 'babel-register';
import 'babel-polyfill';

render(<Greeter />, document.getElementById('root'));