import React from "react";
import store from './store'

// 引入Provider
import { Provider } from "react-redux";


import ComA from './pages/ComA'
import ComB from './pages/ComB'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA />
        <ComB />
      </div>
    </Provider>
  );
}

export default App;
