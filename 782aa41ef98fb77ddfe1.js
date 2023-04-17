import React from 'react';
import { createRoot } from 'react-dom/client';
import "./App.css";
import App from "./App.jsx";
var container = document.getElementById('app');
var root = createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));