import History from "../components/History";
import Chat from "../components/Chat";
import { useState , useEffect} from "react";

export default function ChatBot() {

  const [users, setUsers] = useState(Object);
  const [userID, setUserID] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  
   useEffect(() => {
  const fetchData = async () => {
    try {
      const token = sessionStorage.getItem("token"); // ← Aquí obtienes el valor real
      console.log(token);
      const res = await fetch("http://127.0.0.1:8000/api/auth/admin/users", {
        method: "GET",
        headers: {
          "Authorization": `${token}`,
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) throw new Error("Error en la petición");

      const json = await res.json();
      setUsers(json);
    } catch (error) {
      console.error("❌ Error al obtener datos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
    if (loading) return <p>Cargando datos...</p>;
  
  return (
    <div className='bg-[#101010] text-white flex h-screen'>
      <History userData = {users} setUserId={setUserID}/>
      <Chat userId = {userID}/>
    </div>
  );
}