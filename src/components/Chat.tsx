import { useState, useEffect } from "react";
import Conversation from "./Conversation"



export default function Chat(props: {userId: number | null}) {

    const [chats, setChats] = useState([])
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/auth/user/${props.userId}/messages`);

      if (!res.ok) throw new Error("Error en la petición");

      const json = await res.json();
      setChats(json);
    } catch (error) {
      console.error("❌ Error al obtener datos:", error);
    }
  };

  if (props.userId) {
    fetchData(); 
  }
}, [props.userId]);



  return (
    <main className="w-full flex flex-col">
         <Conversation Chats={chats.messages}/>
    </main>
  )
}
