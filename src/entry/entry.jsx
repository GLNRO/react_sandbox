import Styles from './entry.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import WelcomeMessage from '../welcomeMessage/welcomeMessage.jsx';

ReactDOM.render(<WelcomeMessage />, document.querySelector("#main"));
