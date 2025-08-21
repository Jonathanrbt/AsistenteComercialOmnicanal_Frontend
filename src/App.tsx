import { Routes , Route} from 'react-router-dom'
import ChatBot from './pages/ChatBot'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/chatbot' element={<ChatBot/>}/>
    </Routes>
  )
}

export default App
