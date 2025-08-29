import { useState, useEffect, useRef, useCallback } from 'react';
import PreviousChat from "./PreviousChat";

// Hacemos una simulacion de datos del historial de chats por ahora
const allChats = [
    "reunion familiar",
    "Celebracion en pareja",
    "Plan de negocio 2024",
    "Ideas para el equipo de marketing",
    "Cotizacion de software",
    "Nuevos productos",
    "Soporte tecnico",
    "Agenda para la reunion",
    "Fechas de entrega del proyecto",
    "Feedback de clientes"
];

const CHATS_TO_LOAD = 5;

export default function History() {
    const [chatsToShow, setChatsToShow] = useState(CHATS_TO_LOAD);
    
    // Tipado explicito para el ref
    const listRef = useRef<HTMLUListElement>(null);

    // Envolvemos el metodo en useCallback
    const handleScroll = useCallback(() => {
        if (listRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listRef.current;
            
            if (scrollTop + clientHeight >= scrollHeight - 50) {
                if (chatsToShow < allChats.length) {
                    setChatsToShow(prev => prev + CHATS_TO_LOAD);
                }
            }
        }
    }, [chatsToShow]); // Le pasamos chatsToShow como dependencia

    useEffect(() => {
        const listElement = listRef.current;
        if (listElement) {
            // Agregamos el event listener
            listElement.addEventListener('scroll', handleScroll);
            
            // Una funcion de limpieza
            return () => {
                listElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, [handleScroll]); // Ahora la dependencia es handleScroll

    return (
        <aside className="w-[25%] bg-[#181818] p-4 border-r border-gray-700 flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">Chats</h2>
            <ul ref={listRef} className="space-y-2 overflow-y-auto">
                {allChats.slice(0, chatsToShow).map((chatName, index) => (
                    <PreviousChat key={index}>
                        {chatName}
                    </PreviousChat>
                ))}
            </ul>
        </aside>
    );
}