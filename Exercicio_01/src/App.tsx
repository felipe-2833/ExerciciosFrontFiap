import React from 'react'
import Cabecalho from './Components/Cabecalho/Cabecalho'
import Carros from './Components/Carros/Carros'
import Parceiros from './Components/Parceiros/Parceiros'

export default function App() {

  const listaCarros:[string,string,string,string,string] = ['Ferrari 812 GTS','Lamburghini Veneno','Maserati MC20','Bugatti Mistral','Mustang GT']

  const multiplicador:(a:number, b:number) => number = (a:number,b:number) => {
    return a*b
  }

  return (
    <div>
      <Cabecalho/>
      <Carros listaCarros={listaCarros}/>
      <Parceiros multiplicador={multiplicador}/>
    </div>
    

  )
}
