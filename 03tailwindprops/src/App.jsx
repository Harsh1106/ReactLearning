import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "harsh",
    age: 23
  }

  let newArr = [1, 2, 3, 4, 5] //to pass array as props we can directly pass it like this, we don't need to use spread operator or anything like that, we can directly pass it as props and access it in the child component by using the name of the prop within curly braces
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind test
      </h1>
      <Card username= "chai aur code" btnText="click me" />
      <Card username="harsh aur code" />
      {/* <Card channel= "chai aur code" someObj={newArr} /> -> way to pass props */}
    </>
  )
}

export default App;