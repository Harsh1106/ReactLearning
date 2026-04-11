import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null) //useRef is a hook that allows us to create a mutable reference that persists across re-renders. It can be used to access DOM elements directly, or to store any mutable value that we want to persist across renders without causing a re-render when it changes.

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) string += "0123456789"    
    if(charAllowed) string += "!@#$%^&*()_+-=[]{}|;:,.<>/?"

    for(let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) //here we put the dependencies of the function, so that it will be re-created when any of these dependencies change. This is important because if we don't include these dependencies, the function will not be updated when the state changes, and it will always use the initial values of length, numberAllowed, and charAllowed.

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password); //window.navigator.clipboard is a web API that allows us to interact with the clipboard. The writeText method is used to write text to the clipboard. In this case, we are writing the generated password to the clipboard when the user clicks the "Copy" button.
  }, [password])//here we put the dependencies of the function, so that it will be re-created when any of these dependencies change. This is important because if we don't include these dependencies, the function will not be updated when the state changes, and it will always use the initial value of password.

  useEffect(() => {
    passwordGenerator()},
   [length, numberAllowed, charAllowed, passwordGenerator]) //here we put the dependencies of the useEffect, so that it will be re-run when any of these dependencies change. This is important because if we don't include these dependencies, the useEffect will not be updated when the state changes, and it will always use the initial values of length, numberAllowed, and charAllowed.

  return (
    <div>
      <div className='w-full max-w-d mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}/>
          <label htmlFor='numberInput'>Numbers</label>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
              setCharAllowed((prev) => !prev);
            }}/>
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
