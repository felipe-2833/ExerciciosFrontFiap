import React from 'react'
import Ferrari from "../../imgs/01_Img.png"
import Lamburghini from "../../imgs/02_Img.png"
import Masserati from "../../imgs/03_Img.png"
import Bugatti from "../../imgs/04_Img.png"
import Mustang from "../../imgs/05_Img.png"

export default function Carros(props:{listaCarros:[string,string,string,string,string]}) {

    return (
    <div>
        <ul>
            <li>{props.listaCarros[0]}</li><img src={Ferrari} alt="Ferrari" width="250px" />
            <li>{props.listaCarros[1]}</li><img src={Lamburghini} alt="Lambu" width="250px" />
            <li>{props.listaCarros[2]}</li><img src={Masserati} alt="MAsseras" width="250px" />
            <li>{props.listaCarros[3]}</li><img src={Bugatti} alt="Bugatti" width="250px" />
            <li>{props.listaCarros[4]}</li><img src={Mustang} alt="Mustang" width="250px" />
        </ul>
    </div>
  )
}
