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
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {props.Chats?.map((msg, index) => (
          <Message key={index} isBot={msg.sender} created_at={msg.created_at}>
            {msg.text}
          </Message>
        ))}
        {/* 👇 Mueve el ref aquí, dentro del contenedor con overflow */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}