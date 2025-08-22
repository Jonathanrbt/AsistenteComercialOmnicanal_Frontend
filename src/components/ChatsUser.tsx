type User = {
  id: number;
  name: string;
  chats: string[];
};

type Props = {
  selectedUser: User | null;
};

export default function ChatsUser({ selectedUser }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Chats</h2>

      {selectedUser ? (
        <div className="space-y-3">
          {selectedUser.chats.map((msg, index) => (
            <div
              key={index}
              className="bg-gray-700 p-3 rounded max-w-md text-white"
            >
              {msg}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">
          Selecciona un usuario para ver sus chats.
        </p>
      )}
    </div>
  );
}