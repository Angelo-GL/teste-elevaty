import "./Main.css"
import React from "react"
import Heade from './Heade'

export default props => 
    <React.Fragment> 
        <Heade {...props}/>
        <main>
            Conteúdo
        </main>
    </React.Fragment>