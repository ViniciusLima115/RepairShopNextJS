import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";


export default function Home() {
  return (
    <div className="bg-home-img bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
    style={{ backgroundImage: "url('/images/homeImg.jpg')" }}>
      <main className="flex flex-col gap-6 p-6 sm:p-12 rounded-xl bg-black/70 backdrop-blur-sm w-11/12 sm:w-4/5 md:w-3/5 text-white text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-md">
          VH Assistencia Especializada
        </h1>
        <address className="not-italic text-base sm:text-lg md:text-xl">
          Rua Maria de Fatima A Franca,101 - Tabuleiro dos Martins<br />
          CEP: 57081315 - Maceio - AL<br />
          Telefone: (82) 99837-3869<br />
          Email: VHassistencia@proton.me
        </address>
        <p className="text-base sm:text-lg md:text-xl">
          Aberto de Segunda a Sexta das 08:00 as 18:00 e Sabado das 08:00 as 12:00
        </p>
        <a href="tel:82998373869" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300">
          Entre em Contato Clicando aqui
        </a>
          
      </main>
    </div>
  );
}