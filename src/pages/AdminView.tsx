import { useState } from "react";
import UserList from "../components/UserList";
import ChatsUser from "../components/ChatsUser";

const users = [
  { id: 1, name: "Juan Pérez", chats: ["Hola", "¿Cómo estás?", "Gracias"], timeLastMessage: 2 },
  { id: 2, name: "María Gómez", chats: ["Buenos días", "¿Hay novedades?"], timeLastMessage: 1 },
];

export default function AdminPanel() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const selectedUser = users.find((u) => u.id === selectedUserId) || null;

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="w-1/3 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">Usuarios registrados</h2>
        <UserList
          users={users}
          selectedUserId={selectedUserId}
          onSelect={setSelectedUserId}
        />
      </aside>
      <main className="w-2/3 p-6">
        <ChatsUser selectedUser={selectedUser} />
      </main>
    </div>
  );
}