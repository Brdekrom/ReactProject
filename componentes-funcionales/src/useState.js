import { useState } from 'react'


// reglas de los hooks: 
// idealmente al comienzo del componente:
// no se llaman en loops, ni condiciones, ni while, ni nada

//solo se llaman en 2 partes: 
//solo se puede llamar en un componente de React
//Custom hooks

//cuando creemos un custom hook nombre use*%*

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        setContador(contador + 1);
    }
    return [contador, incrementar]
}

const App = () => {
    const [contador, incrementar] = useContador(0)
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}


// class App extends Component {
//     state = { contador: 0}
//     incrementar = () => {
//         this.setState({contador: this.state.contador + 1})
//     }
//     render(){

//         return(
//             <div>
//             Contador: {this.state.contador}
//             <button onClick ={this.incrementar}>Incrementar</button>
//         </div> 
//         )
//     }
// }

export default App