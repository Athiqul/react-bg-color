import { useState } from 'react'



function App() {
  
  const [color,setColor]=useState('olive');

  return (
    <>
    <div className='h-screen w-screen duration-1000' style={{ background:color }}>
      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-4'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-lg'>
          <button className='outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg' onClick={()=>setColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 bg-green-500 rounded-full text-white shadow-lg' onClick={()=>setColor('green')}>Green</button>
          <button className='outline-none px-4 py-1 bg-sky-500 rounded-full text-white shadow-lg' onClick={()=>setColor('blue')}>Sky</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
