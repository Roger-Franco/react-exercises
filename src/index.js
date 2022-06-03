import React from 'react'
import ReactDOM from 'react-dom'
import BomDia from './componentes/BomDia'
import Multi, { BoaNoite, BoaTarde } from './componentes/Multiplos'

ReactDOM.render(
  <div>
    <BomDia nome='Roger' />
    <Multi.BoaNoite nome='Rogerrr' />
    <BoaTarde nome='Roger' />
  </div>
  , document.getElementById('root'))