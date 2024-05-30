import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { NavLink } from 'react-router-dom'
import axios from 'axios';



function Dispositivos() {

  const [dispositivos, setDispositivos]= useState([]);

  useEffect(()=>{

    const fetchDispositivos = async ()=>{
      try {
        const response = await axios.get('http://localhost:3000/dispositivos');
        console.log(response.data);
        setDispositivos(response.data);
        console.log(dispositivos);
      } catch (error) {
        console.error("Erro ao buscar dispositivo", error)
      }
    }

fetchDispositivos();

  },[])



  return (
    <div className='container mt-3'>
        <div className='d-flex justify-content-around  align-items-center w-75'>
        <h1>Dispositivos Cadastrados</h1>
        <NavLink to={'/cadastro'} className='btn btn-primary'>Cadastrar</NavLink>
        </div>
        
        <section className='d-flex justify-content-start flex-wrap gap-3 mt-3'>

{
dispositivos.map((dispositivo,index)=>{
  return <Card key={index} nome={dispositivo.nome} descricao={dispositivo.descricao} ip={dispositivo.ip} />
})


}

   
 
 
        </section>
        
    </div>
  )
}

export default Dispositivos
