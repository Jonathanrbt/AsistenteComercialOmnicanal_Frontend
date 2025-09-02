import dayjs from "dayjs"

export default function Message(props: {isBot: string ,children: string,  created_at: string}) {
  const isUser = props.isBot === "user"

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} mb-4`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg ${isUser ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800"}`}>
        <p className="whitespace-pre-wrap">{props.children}</p>
      </div>
      <span className="text-xs text-gray-500 mt-1">
        {dayjs(props.created_at).format("HH:mm")}
      </span>
    </div>
  )
}

