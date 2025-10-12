export default function Conteudo() {
  return (
    <section id="about" className="py-20 mx-auto max-w-6xl px-4 flex flex-col lg:flex-row gap-2">
      <div className='order-2 lg:order-1 flex flex-col justify-center w-full p-4 h-full rounded-md'>
        <h2 className="text-2xl font-semibold text-[#50341F]">Faça sua Declaração de Imposto de Renda com tranquilidade e garantia!</h2>
        <p className="mt-4 text-base text-[#50341F]">
         Sabemos que lidar com o Imposto de Renda pode gerar muitas dúvidas, mas nossa equipe de especialistas está pronta para simplificar esse momento para você. Contamos com consultoria própria para ajudar você a economizar legalmente e evitamos a temida malha fina.
        </p>
        <br />
        <p className="mt-4 text-base text-[#50341F]">
         Clique em “Quero ajuda para declarar meu IRPF” e deixe essa responsabilidade por nossa conta!
        </p>
        <button className="mt-4 text-[#F1EDE4] px-4 py-2 rounded-md self-center text-1xl font-bold cursor-pointer bg-[#50341F]">Quero ajuda para declarar meu IRPF</button>
      </div>
      <div className="order-1 lg:order-2 mx-auto max-w-6xl px-4">
        <img src="/assets/renata_.png" alt="" />
      </div>
    </section>
  )
}