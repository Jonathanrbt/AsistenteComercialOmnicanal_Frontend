import PreviousChat from "./PreviousChat";

export default function History() {
  return (
    // Con h-full lo usamos para que el componente ocupe toda la altura de nuestra pagina , que es chatbot.
    // Con over-flow que es para que el contenido se desplace dentro de este contenedor
    <aside className="w-[25%] bg-[#181818] p-4 border-r border-gray-700 flex flex-col h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>
      <ul className="space-y-2">
        <PreviousChat>
          reunion familiar
        </PreviousChat>
        <PreviousChat>
          Celebracion en pareja
        </PreviousChat>
      </ul>
    </aside>
  );
}