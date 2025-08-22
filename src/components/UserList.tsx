type User = {
  id: number;
  name: string;
  chats: string[];
  timeLastMessage: number;
};

type Props = {
  users: User[];
  selectedUserId: number | null;
  onSelect: (id: number) => void;
};

export default function UserList({ users, selectedUserId, onSelect }: Props) {
  return (
    <ul className="space-y-2">
      {users.map((user) => (

        <li
          key={user.id}
          onClick={() => onSelect(user.id)}
          className={`p-2 rounded cursor-pointer hover:bg-gray-700 ${
            selectedUserId === user.id ? "bg-gray-700" : ""
          }`}
        >
           
          {user.name}
          <span className="text-sm text-gray-400"> {user.chats.length} mensajes • hace {user.timeLastMessage}h</span>

        </li>
      ))}
    </ul>
  );
}