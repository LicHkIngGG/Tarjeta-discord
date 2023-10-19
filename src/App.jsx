import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div className='App-container'>
     {
      cars.map(car=>{
        return(
          <Card perfil={card}>
          <Cars perfil={card}/>
          
          </Card>
        )
      })
     } 
    
    </div>
  )
}
export default App
