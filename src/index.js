import React from 'react';
import ReactDOM from 'react-dom';
import { MyDayApp } from './components/App/MyDayApp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './styles/styles.scss'

library.add(fab, far, fas);

ReactDOM.render(
    <MyDayApp />, document.getElementById('root')
);
