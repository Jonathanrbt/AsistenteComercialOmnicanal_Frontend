import { Routes , Route} from 'react-router-dom'
import ChatBot from './pages/Chatbot'
import './App.css'
import AdminPanel from './pages/AdminView'
import LoginPage from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path='/chatbot' element={<ChatBot/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  )
}

export default App
