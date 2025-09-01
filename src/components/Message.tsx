export default function Message(props: {isBot: string ,children: string}) {
  let styles = props.isBot === "user" ? "bg-purple-500 text-white p-3 rounded-lg max-w-xs self-end" : "bg-white text-black p-3 rounded-lg max-w-xs self-start"
  return (
    <div className={styles}>
      {props.children}
    </div>
  );
}
