import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider, useStoreRehydrated } from 'easy-peasy';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './redux/configStore';
import reportWebVitals from './reportWebVitals';

function WaitForStateRehydration({ children }) {
    const isRehydrated = useStoreRehydrated();
    console.log(isRehydrated);
    console.log(children);
    return isRehydrated ? children : null;
}

ReactDOM.render(
    <StoreProvider store={store}>
      <WaitForStateRehydration>
        <App />
      </WaitForStateRehydration>
    </StoreProvider>,
    document.getElementById('root'),
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
