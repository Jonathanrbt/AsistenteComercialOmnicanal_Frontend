import Message from "./Message";
import { showError, showSuccess } from "../lib/toast";
import { useState } from "react";



export default function Chat(props: {Chats: object[]}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ isBot: boolean; text: string }[]>([
    { isBot: true, text: "Hola, ¿cómo estás?" },
    {
      isBot: false,
      text: "Hola, estoy buscando una cotización para una cena familiar",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message.trim() !== "") {
      const userMessage = message;
      
      // Aqui se limpia nuestro input y agrega el mensaje del usuario de inmediato
      setMessage("");
      setMessages((prev) => [
        ...prev,
        { isBot: false, text: userMessage },
      ]);
      
      try {
        // Muestra el indicador de carga
        setIsLoading(true);

        const response = await fetch("http://127.0.0.1:8000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        });

        if (!response.ok) {
          throw new Error("Error al enviar el mensaje");
        }

        const data = await response.json();

        // Agregamos la respuesta del bot a la lista de mensajes osea en el chat
        setMessages((prev) => [
          ...prev,
          { isBot: true, text: data.response },
        ]);

        showSuccess("Mensaje enviado");
      } catch (error) {
        console.error("Error:", error);
        showError("No se pudo enviar el mensaje");
      } finally {
        // Oculta el indicador de carga, independientemente del resultado , por si hubo exito o error
        setIsLoading(false);
      }
    }
  };

  function TypingIndicator() {
    return (
      <div className="bg-gray-300 dark:bg-gray-700 p-3 rounded-lg max-w-xs self-start animate-pulse">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        </div>
      </div>
    );
  }

  console.log(props.Chats);
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {!props.Chats || props.Chats.map((msg, index) => (
          <Message key={index} isBot={msg.sender}>
            {msg.text}
          </Message>
        ))}
        {isLoading && <TypingIndicator />}
      </div>

      {/* <div className="mt-auto p-4 border-t border-gray-700">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          placeholder="Escribe tu mensaje y presiona Enter"
          className="border p-2 rounded-md w-full bg-[#101010] text-white"
        />
      </div> */}
    </div>
  );
}