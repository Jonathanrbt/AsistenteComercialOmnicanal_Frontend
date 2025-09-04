import Message from "./Message";
import { useEffect, useRef } from "react";

interface Chat {
  chat_id: number;
  created_at: string;
  id: number;
  sender: string;
  text: string;
}

export default function Chat(props: { Chats: Chat[] }) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });

    }
  }, [props.Chats]);

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto py-6 flex flex-col custom-scrollbar">
        {props.Chats?.map((msg, index) => (
          <div key={index} className="px-3">
          <Message key={index} isBot={msg.sender} created_at={msg.created_at}>
            {msg.text}
          </Message>
          </div>
        ))}
        {/* 👇 Mueve el ref aquí, dentro del contenedor con overflow */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}