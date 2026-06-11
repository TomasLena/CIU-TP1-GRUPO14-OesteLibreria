import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm font-sans">
      <div className="container mx-auto px-4 py-4">
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 items-center text-base font-bold uppercase tracking-wider text-slate-700">
            <li>
              <Link 
                to="/" 
                className="pb-1 border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/productos" 
                className="pb-1 border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link 
                to="/nosotros" 
                className="pb-1 border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link 
                to="/finalizar-compra" 
                className="pb-1 border-b-2 border-transparent hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
              >
                Finalizar Compra
              </Link>
            </li>
          </ul>
          
        </div>

      </div>
    </nav>
  );
}
