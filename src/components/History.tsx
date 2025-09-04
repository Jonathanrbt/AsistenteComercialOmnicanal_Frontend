import { useState, useEffect, useRef, useCallback } from 'react';
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
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <aside className="w-[25%] bg-[#181818] p-2 border-r border-gray-700 flex flex-col h-full relative">
      <div className="absolute top-3 left-4 right-4 z-10 bg-[#181818] pb-2">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Chats</div>
          <button
            onClick={handleReload}
            className="p-1 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
            title="Recargar página"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mt-14 mb-14">
        <ul className="space-y-2  pt-2">
          {props.userData.map((user, index) => {
            const userName = user.name.split(" ")
            return(
            <PreviousChat key={index} onClick={() => {props.setUserId(user.id)}}>
              {userName[0]}
            </PreviousChat>
            )
          })}
        </ul>
      </div>
      <div className="absolute bottom-2 left-2 right-2">
        <button
          onClick={handleLogout}
          className="w-full p-2 bg-red-600 hover:bg-red-700 rounded text-white"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}