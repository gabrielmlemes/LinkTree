import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white gap-5 w-full">
        <span className="text-6xl">404</span>
        <h1 className="text-6xl">Página não encontrada :(</h1>
        <p className="text-2xl italic">Você caiu em uma página que não existe</p>

        <Link to="/" className="bg-slate-400 py-1 px-2 rounded-md font-medium">
            Volte para a página inicial
        </Link>
    </div>
  )
}

export default ErrorPage