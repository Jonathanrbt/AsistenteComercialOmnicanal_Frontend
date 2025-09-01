import { useState, useEffect } from "react";
import Conversation from "./Conversation"



export default function Chat(props: {userId: number}) {

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
    fetchData(); // Solo si hay un ID válido
  }
}, [props.userId]); // ← Aquí está la clave

  console.log(chats);
  return (
    <main className="w-[70%] p-6 flex flex-col justify-end space-y-4">
         <Conversation Chats={chats.messages}/>
    </main>
  )
}
