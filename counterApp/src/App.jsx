import { useState,useEffect,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState("cyan")
  const [length, setLength] = useState(1)
  const [noallowed, setNoallowed] = useState(false)
  const [challowed, setChallowed] = useState(false)
  const [password, setPassword] = useState("")

  const passGen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(noallowed){
      str+="0123456789"
    } if(challowed){
      str+="@#$%&~"
    }
    for (let i=1 ; i<= array.length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
    }
    setPassword(pass)

  },[length,noallowed,challowed,setPassword])

   const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
      
      <div className="h-screen "
    style={{backgroundColor: color}}
    >
      <h4>Counter App</h4>
      <h3>Current Count ={counter}</h3>
      <button onClick={addValue}>Add Counter</button>
      <button onClick={removeValue}>Remove Counter</button>

      
      <div className='w-full max-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        

      </div>









      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex justify-center gap-5 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
