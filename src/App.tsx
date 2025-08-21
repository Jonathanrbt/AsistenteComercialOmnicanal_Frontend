import './App.css'
import Chat from './components/Chat'
import History from './components/History'

function App() {

  return (
    <div className='bg-[#101010] text-white min-h-screen flex'>
        <History/>
        <Chat/>
    </div>
  )
}

export default App
