import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Sobre from './screens/Sobre.jsx'
import Experiencia from './screens/Experiencia.jsx'
import Formacao from './screens/Formacao.jsx'
import Hobbies from './screens/Hobbies.jsx'
import Grupo from './screens/Grupo.jsx'
import Cep from './screens/Cep.jsx'

function App() {

  const nome = "Lucas"

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Grupo />}></Route>
          <Route path='/Sobre/:id' element={ <Sobre /> }/>
          <Route path='/Experiencia/:id' element={ <Experiencia /> }/>
          <Route path='/Formacao/:id' element={ <Formacao /> }/>
          <Route path='/Hobbies/:id' element={ <Hobbies /> }/>
          <Route path='/Cep/:cep' element={ <Cep /> }/>
          <Route path="/*" element={<p>NAO ACHOU</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
