import React from 'react';
import ReactDOM from 'react-dom';
import { MyDayApp } from './components/App/MyDayApp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './styles/styles.scss'

library.add(fab);

ReactDOM.render(
    <MyDayApp />, document.getElementById('root')
);
