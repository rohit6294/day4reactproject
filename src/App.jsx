import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div class="m-0 p-0 h-screen w-screen flex justify-center items-end " style={{backgroundColor:color}}>
    <div class=" flex w-[70%] px-10 items-center justify-between gap-2 mb-12 border text-white p-2 rounded-xl bg-gray-200 ">
        <div onClick={()=>setColor("red")} className=" bg-red-500 p-2 px-5 rounded-2xl">Red</div>
        <div onClick={()=>setColor("green")} className=" bg-green-500 p-2 px-5 rounded-2xl">Green</div>
        <div onClick={()=>setColor("blue")} className=" bg-blue-500 p-2 px-5 rounded-2xl">Blue</div>
        <div onClick={()=>setColor("orange")} className=" bg-orange-500 p-2 px-5 rounded-2xl">Orange</div>
        <div onClick={()=>setColor("grey")} className=" bg-gray-500 p-2 px-5 rounded-2xl">Grey</div>
        <div onClick={()=>setColor("yellow")} className=" bg-yellow-500 p-2 px-5 rounded-2xl">Yellow</div>
        <div onClick={()=>setColor("pink")} className=" bg-pink-500 p-2 px-5 rounded-2xl">Pink</div>
        <div onClick={()=>setColor("purple")} className=" bg-purple-500 p-2 px-5 rounded-2xl">Purple</div>
        <div onClick={()=>setColor("lime")} className=" bg-lime-500 p-2 px-5 rounded-2xl">Lime</div>
        <div onClick={()=>setColor("white")} className=" bg-gray-400 p-2 px-5 rounded-2xl">White</div>
        <div onClick={()=>setColor("black")} className=" bg-black p-2 px-5 rounded-2xl">Black</div>
    </div>

  </div>
  
  )
}

export default App
