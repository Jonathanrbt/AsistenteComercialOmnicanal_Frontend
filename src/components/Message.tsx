export default function Message(props: {isBot: boolean ,children: string}) {
  let styles = props.isBot === false ? "bg-purple-500 text-white p-3 rounded-lg max-w-xs self-end" : "bg-white text-black p-3 rounded-lg max-w-xs self-start"
  return (
    <div className={styles}>
      {props.children}
    </div>
  );
}
