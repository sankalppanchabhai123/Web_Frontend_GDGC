import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Chatbotfolder} from './Chatbotfolder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Chatbotfolder } from './Chatbotfolder';

// // --- ADD-ON: Theme Setup ---
// // (This is just an example. You would import ThemeProvider
// // from your chosen library, e.g., 'styled-components')
// import { ThemeProvider } from 'styled-components'; 

// // Define a simple theme
// const theme = {
//   colors: {
//     primary: '#00304a',
//     secondary: 'rgb(254, 254, 115)',
//     background: '#ffffff',
//     text: '#333333',
//   },
//   fonts: {
//     primary: "'Open Sans', sans-serif",
//     secondary: "'Poppins', sans-serif",
//   }
// };
// // --- End Add-on ---

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* --- ADD-ON: Wrap App in Provider --- */}
//     <ThemeProvider theme={theme}>
//       <App />
//       <Chatbotfolder />
//     </ThemeProvider>
//     {/* --- End Add-on --- */}
//   </React.StrictMode>
// );

// reportWebVitals();