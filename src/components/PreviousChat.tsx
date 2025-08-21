export default function PreviousChat(props: { children: string }) {
  return (
    <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
      {props.children}
    </li>
  );
}
