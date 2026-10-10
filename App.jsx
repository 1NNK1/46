import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ExampleComponent from './components/ExampleComponent';

function App() {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <ExampleComponent />
      </div>
    </Provider>
  );
}

export default App;
