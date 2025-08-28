import { Routes , Route} from 'react-router-dom'
import ChatBot from './pages/Chatbot'
import './App.css'
import AdminPanel from './pages/AdminView'
import LoginPage from './pages/Login'
import Register from './pages/Register'
import ToastConfig from './lib/ToastConfig'


function App() {

  return (
    <>
    <ToastConfig/>
    <Routes>
      <Route path='/chatbot' element={<ChatBot/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
