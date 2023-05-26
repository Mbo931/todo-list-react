import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import store from './store/store.js';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
