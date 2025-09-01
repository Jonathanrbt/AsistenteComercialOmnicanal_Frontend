import PreviousChat from "./PreviousChat";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function History(props: {userData: User[], setUserId: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  console.log(props.userData);

  return (
    <aside className="w-[25%] bg-[#181818] p-4 border-r border-gray-700 flex flex-col h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>
      <ul className="space-y-2">
        {props.userData.map((user, index) => {
          const userName = user.name.split(" ")
          return(
          <PreviousChat key={index} onClick={() => {props.setUserId(user.id)}}>
            {userName[0]}
          </PreviousChat>
          )
        })}
      </ul>
    </aside>
  );
}