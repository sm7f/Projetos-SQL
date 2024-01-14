export default function Cadastro() {
    return (
        <div className="py-8 lg:py-4 px-4 mx-auto max-w-screen-md bg-white rounded-xl">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Cadastro</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">Preencha as informações seguindo as orientações</p>

        <form action="https://formspree.io/f/xdoqoapv" method='POST' className="space-y-8 m-10">
            <div>
                <label form="email" className="block mb-2 text-sm font-medium text-black">Seu e-mail</label>
                <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
            </div>
            <div>
                <label form="subject" className="block mb-2 text-sm font-medium text-black">Seu Nome</label>
                <input type="text" name="name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Digite seu nome..." required></input>
            </div>
            <div>
                <label form="subject" className="block mb-2 text-sm font-medium text-black">Senha</label>
                <input type="text" name="name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Digite seu nome..." required></input>
            </div>
            <div>
                <label form="subject" className="block mb-2 text-sm font-medium text-black">Confirmar Senha</label>
                <input type="text" name="name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Digite seu nome..." required></input>
            </div>

            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-500 sm:w-fit hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900">
                    Confirmar
            </button>
        </form>
      </div>      
    )
  }
  