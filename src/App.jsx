import React, { createContext } from 'react'
import Component1 from './components/Component1';
const UserContext = createContext();

const App = () => {
  const user = { name: 'Hassan', age: 30 };

  return (
    <UserContext.Provider value={user}>
      <div className="container">
        <h1 className="text-center my-3">
          useContext Hook in React
        </h1>
        <Component1 />
      </div>
      </UserContext.Provider>)
}

export default App
