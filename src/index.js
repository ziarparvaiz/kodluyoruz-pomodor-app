import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
import App from './App';
import SettingsContextProvider from './context/SettingsContext';
import reducer, {initialState} from "./context/reducer"
import {TodoLayer} from "./context/TodoContext"
ReactDOM.render(
  <SettingsContextProvider>
    <TodoLayer initialState = {initialState} reducer={reducer}>
      <App />
    </TodoLayer>
  </SettingsContextProvider>,
  document.getElementById('root')
);
