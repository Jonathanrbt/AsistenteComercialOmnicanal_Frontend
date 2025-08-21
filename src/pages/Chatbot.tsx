import History from "../components/History";
import Chat from "../components/Chat";

export default function ChatBot() {
  return (

    <div className='bg-[#101010] text-white min-h-screen flex'>
        <History/>
        <Chat/>
    </div>
  )
}
