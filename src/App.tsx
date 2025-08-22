import { Routes , Route} from 'react-router-dom'
import ChatBot from './pages/Chatbot'
import './App.css'
import AdminPanel from './pages/AdminView'

function App() {

  return (
    <Routes>
      <Route path='/chatbot' element={<ChatBot/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
    </Routes>
  )
}

export default App
