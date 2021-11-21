import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'src/index.scss';
import Netflix from 'src/page/Netflix';
import reportWebVitals from 'src/reportWebVitals';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Netflix />}  />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
