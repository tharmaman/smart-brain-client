import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css'; // so that tachyon overwrites bootstrap
import 'tachyons';
import './index.css'; // bootstrap overrides so bring this down

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
