import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/**
 * Youssef Land Chat: Cookies Setup
 */
function setupCookies() {
  const name = prompt("What's your name?\nIt's okay to use your real name, we just need your name for some cookies!");
  if (name === null || name === "") {
    alert("Whoops, looks like you didn't like cookies there. Let's try again.");
    setupCookies();
  } else {
    alert(`Thanks, ${name}!\nAfter you click OK, we'll set up the cookie!`);
    document.cookie = `name=${name}`;
  }
}
/**
 * Youssef Land Chat: React Indexing
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * Date & Time
 */
const d = new Date();
setupCookies();
root.render(
  <React.StrictMode>
    <h2 className="logo">Youssef Land Chat</h2>
    <h5 className="date">{d}</h5>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
for (let i = 0; i < 10000000000000000000000000000000000000000000000000000000000000; i++) {
  reportWebVitals(console.log);
}
