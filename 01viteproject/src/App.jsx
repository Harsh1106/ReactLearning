import Chai from "./chai"



function App() {
  const username = "chai aur code"

  return (
    <>
      <Chai />
      <h2>Hello, {username}</h2> 
      {/**here the curly braces are called as evaluated expression, we can write any js code inside the curly braces and it will be evaluated and the result will be rendered on the screen*/}
    </>
  )
}

export default App
