import React from 'react'
import Cabecalho from './Components/Cabecalho/Cabecalho'
import Cards from './Components/Conteudo/Cards'
import Rodape from './Components/Rodape/Rodape'
import { ListaCards } from './types'


export default function App() {

  const titulo:string = "Cards Marvel"
  const logo:string = "../Imgs/IMG_01.png"
  const listaCards:ListaCards[] = [
      { id: 1, nome: "Homem de Ferro", rm: 123456, avatar:"./assets/img/img_01.png" },
      { id: 2, nome: "Capitão América", rm: 654321, avatar:"../../assets/img/img_02.png" },
      { id: 3, nome: "Thor", rm: 234567, avatar:"../../assets/img/img_03.png" },
      { id: 4, nome: "Hulk", rm: 765432, avatar:"../../assets/img/img_04.png" },
      { id: 5, nome: "Viúva Negra", rm: 345678, avatar:"../../assets/img/img_05.png" },
      { id: 6, nome: "Homem-Aranha", rm: 876543, avatar:"../../assets/img/img_06.png" },
      { id: 7, nome: "Doutor Estranho", rm: 456789, avatar:"../../assets/img/img_07.png" },
      { id: 8, nome: "Pantera Negra", rm: 987654, avatar:"../../assets/img/img_08.png" },
      { id: 9, nome: "Gavião Arqueiro", rm: 567890, avatar:"../../assets/img/img_09.png" },
      { id: 10, nome: "Feiticeira Escarlate", rm: 678901, avatar:"../../assets/img/img_10.png" }
    ] 

    const texto:string = "Rodapé maneirão"
  return (
    <div>
      <Cabecalho titulo={titulo} logo={logo}/>
      {
        listaCards.map((card) => (<Cards id={card.id} nome={card.nome} rm={card.rm} avatar={card.avatar}/>))
      }
      <Rodape texto={texto}/>
    </div>
  )
}
