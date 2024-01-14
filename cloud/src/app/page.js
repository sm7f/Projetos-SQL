import Cadastro from "./components/cadastro"
export default function Home() {
  return (
    <main className=" bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40 scroll-smooth md:scroll-auto ">
      <section className="min-h-screen">
        <div className="flex bg-gray-600 rounded-xl p-3">
          <nav className="p-5 min-h-48 bg-gray-400 shadow-lg rounded-xl">
            <p className="text-left text-md py-2 leading-8 text-gray-800">Cadastrar</p>
            <p className="text-left text-md py-2 leading-8 text-gray-800">Alterar</p>
            <p className="text-left text-md py-2 leading-8 text-gray-800">Visualizar</p>
            <p className="text-left text-md py-2 leading-8 text-gray-800">Deletar</p>
          </nav>
        <Cadastro></Cadastro>
        </div>
      </section>
    </main>
  )
}