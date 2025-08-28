import Message from "./Message";
import { showError, showSuccess } from "../lib/toast";
import { useState } from "react";

export default function Conversation() {
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
      try {
        // Deshabilita el input y muestra "Escribiendo..."
        setIsLoading(true);
        setMessages((prev) => [
          ...prev,
          { isBot: false, text: message },
          { isBot: true, text: "Escribiendo..." },
        ]);

        const response = await fetch("http://127.0.0.1:8000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: message }),
        });

        if (!response.ok) {
          throw new Error("Error al enviar el mensaje");
        }

        const data = await response.json(); // ← Asegúrate que el backend responde con { response: string }

        // Reemplaza el "Escribiendo..." por la respuesta real
        setMessages((prev) => [
          ...prev.slice(0, -1), // elimina el último mensaje ("Escribiendo...")
          { isBot: true, text: data.response },
        ]);

        setMessage("");
        showSuccess("Mensaje enviado");
      } catch (error) {
        console.error("Error:", error);
        showError("No se pudo enviar el mensaje");
      } finally {
        setIsLoading(false);
      }
    }
  };

  function TypingIndicator() {
    return (
      <div className="bg-white text-black p-3 rounded-lg max-w-xs self-start animate-pulse">
        ...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-4">
      {messages.map((msg, index) => (
        <Message key={index} isBot={msg.isBot}>
          {msg.text}
        </Message>
      ))}
      {isLoading && <TypingIndicator />}

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        placeholder="Escribe tu mensaje y presiona Enter"
        className="border p-2 rounded-md mt-4"
      />
    </div>
  );
}
