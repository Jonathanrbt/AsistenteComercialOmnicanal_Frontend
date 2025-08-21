import PreviousChat from "./PreviousChat";

export default function History() {
  return (
    <aside className="w-[25%] bg-[#181818] p-4 border-r border-gray-700">
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
