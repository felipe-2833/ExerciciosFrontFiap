import React from 'react'
import { CabecalhoTipys } from '../../types'

export default function Cabecalho({titulo,logo}:CabecalhoTipys) {

    document.title = titulo

  return (
    <header>
        <img src={logo} alt="" width="30px"/>
        <h1>{titulo}</h1>
    </header>
  )
}
