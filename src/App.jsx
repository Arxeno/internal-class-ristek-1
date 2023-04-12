import { useState } from 'react';
import './App.scss';
import Home from './pages/Home';
import ExpenseDetail from './pages/ExpenseDetail';

function App() {
  return (
    <div className='App'>
      <ExpenseDetail />
    </div>
  );
}

export default App;
