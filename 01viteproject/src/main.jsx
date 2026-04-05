import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!!</h1>
        </div>
    )
}

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

// babble inject the code to create the react element from the jsx code also known as transpiling the code, the above jsx code will be transpiled to the below code by babble
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // anotherElement
    reactElement
    // <App />
)
