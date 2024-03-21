import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-[100vh]" style={{"background": color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2' >
        <div className='flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button className='bg-red-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("red")}}
          >Red</button>
          <button className='bg-green-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("green")}}
          >Green</button>
          <button className='bg-blue-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("blue")}}
          >Blue</button>
          <button className='bg-orange-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("orange")}}
          >Orange</button>
          <button className='bg-gray-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("grey")}}
          >Grey</button>
          <button className='bg-fuchsia-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("fuchsia")}}
          >Fuchsia</button>
          <button className='bg-yellow-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("yellow")}}
          >Yellow</button>
          <button className='bg-cyan-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("cyan")}}
          >Cyan</button>
          <button className='bg-indigo-500 text-white px-2 py-1 rounded-lg' onClick={()=>{setColor("indigo")}}
          >Indigo</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
