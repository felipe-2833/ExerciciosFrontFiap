import React from 'react'
import { ListaCards } from '../../types'

export default function Conteudo({id,nome,rm,avatar}:ListaCards) {
  return (
    <div key={id}>
      <h1>{nome} - rm:{rm}</h1>
      <img src={avatar} alt={nome} width="50px"/>
    </div>
  )
}
