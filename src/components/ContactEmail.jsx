import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./Input";

export function ContactEmail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_yi8fg3c",
        form.current,
        "JmjXEr1Cuhr1LwCSF"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };
  return (
    <form
      className="mt-2 flex flex-col gap-3 w-[275px] sm:w-96"
      ref={form}
      onSubmit={sendEmail}
    >
      <Input place="Nome" name="name" type="text" />
      <Input place="Email" name="email" type="email" />
      <textarea
        className="resize-none py-2 px-1 h-40 rounded bg-black border-2 border-gray-500 focus:outline-none text-slate-200"
        placeholder="Mensagem"
        name="message"
        required
      />
      <input
        className="text-white max-[331px]:w-[200px] max-[331px]:ml-[50px] py-2 cursor-pointer border-2 border-gray-700 rounded hover:bg-green-900 hover:opacity-90"
        value="Enviar"
        type="submit"
      />
    </form>
  );
}
