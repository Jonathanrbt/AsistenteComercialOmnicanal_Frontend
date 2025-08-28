import History from "../components/History";
import Chat from "../components/Chat";

export default function ChatBot() {
  return (
    // El h-screen es para que el contenedor ocupe el 100% de la altura de la vista
    // Con el flex se crea un contenedor flexible que hara que los elementos se organicen en una fila por defecto
    <div className='bg-[#101010] text-white flex h-screen'>
      <History/>
      <Chat/>
    </div>
  );
}