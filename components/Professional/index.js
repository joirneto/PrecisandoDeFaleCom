import React from "react"
import Image from "next/image"

const Professional = ({ data: { category, nome, tel, isWhats } }) => (
  <article className="flex flex-col shadow my-4 w-10/12">
    <div className="bg-white flex flex-col justify-start p-6">
      <span className="text-red-800 text-sm font-bold uppercase pb-4">
        {category}
      </span>
      <span className="text-red-900 text-3xl font-bold hover:text-gray-700 pb-4">
        {nome}
      </span>
      <p className="text-sm pb-3">
        Telefone:{" "}
        <span className="font-semibold hover:text-gray-800">{tel.replace("55 85", "(85) 9")}</span>
      </p>
      {isWhats && (
        <a
          href={`https://api.whatsapp.com/send?phone=${tel}&text=Olá. Gostaria de saber mais sobre seus serviços de ${category}`}
          target="blank"
          className="w-full bg-red-900 text-white font-bold text-sm uppercase rounded hover:bg-red-700 flex items-center justify-center px-2 py-3 mt-4"
        >
          <Image
            src="/whatsapp.png"
            alt="Entrar em Contato"
            width={32}
            height={32}
          />
          <span className="ml-4">Entrar em Contato</span>
        </a>
      )}
    </div>
  </article>
)

export default Professional
