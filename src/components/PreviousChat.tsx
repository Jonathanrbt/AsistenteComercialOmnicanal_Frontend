interface PreviousChatProps {
  children: string;
  onClick?: () => void;
}

export default function PreviousChat({ children, onClick }: PreviousChatProps) {
  return (
    <li
      className="p-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer"
      onClick={onClick} // ← Aquí se activa el evento
    >
      {children}
    </li>
  );
}
