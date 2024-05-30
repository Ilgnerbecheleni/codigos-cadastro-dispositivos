import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dispositivos from './screens/Dispositivos'
import Cadastro from './screens/Cadastro'

function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Dispositivos/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
    </Routes>
  )
}

export default Rotas
