import logo from './logo.svg';
//import './App.css';
import './main.css'

const estilo2 = {
  boxShadow: '0rem 5rem 3rem rgba (0,0,0,0.5)'
}

const estilo = ({bg = '#222'}) => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 10px',
  margin: '10px 10px'
})

const Li = ({ children }) => {
  return (<li className='clase-li'>{children}</li>)
}

const App = () => {
  const valor = 'Triste'
 
  return (
    <ul className='clase-css'>
      <Li estado = {'feliz'}>valor de li</Li>
      </ul>
  );
}

export default App;
