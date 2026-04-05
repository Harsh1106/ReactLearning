import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5
  const addValue = () => {
    // counter = counter + 1
    if(counter < 20)
      // setCounter(counter + 1) //when we call setCounter, react will re-render the component and update the UI with the new counter value which makes it seamless and efficient. React will only update the parts of the UI that depend on the counter state, rather than re-rendering the entire component, which is why it is so fast and efficient.
    
    setCounter(prevCounter => prevCounter + 1) // this is the correct way to update the state when the new state depends on the previous state. It ensures that you are working with the most up-to-date state value, even if there are multiple state updates queued up. This is because React batches state updates for performance reasons, and using the functional form of setState allows you to access the latest state value when updating it.
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
     setCounter(prevCounter => prevCounter - 1)
     setCounter(prevCounter => prevCounter - 1)
     setCounter(prevCounter => prevCounter - 1)
     setCounter(prevCounter => prevCounter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
