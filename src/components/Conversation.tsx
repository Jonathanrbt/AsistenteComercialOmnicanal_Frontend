import Message from "./message"
import { Input_search } from "./Input_search"

export default function Conversation() {
  return (
    <>
    <Message isBot={true}>
      Hola, ¿cómo estás?
    </Message>
    <Message isBot={false}>
      Hola, estoy buscando una cotizacion para una cena familiar
    </Message>
    <Input_search/>
  </>

  )
}
