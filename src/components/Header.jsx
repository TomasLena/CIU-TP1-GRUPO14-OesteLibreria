import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Truck } from 'lucide-react';

export default function Header({ carrito = [] }) {
  const [busqueda, setBusqueda] = useState('');
  const [animarCarrito, setAnimarCarrito] = useState(false);
  const navigate = useNavigate();

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    useEffect(() => {
      if (cantidadTotal === 0) return;

      setAnimarCarrito(true);

      const timer = setTimeout(() => {
        setAnimarCarrito(false);
      }, 300);

      return () => clearTimeout(timer);
    }, [cantidadTotal]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/productos?q=${encodeURIComponent(busqueda)}`);
    } else {
      navigate('/productos');
    }
  };

  return (
    <header className="w-full font-sans relative z-50">
      <div className="bg-black text-white text-xs py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-center items-center">
          <p className="flex items-center gap-2 tracking-wide">
            <Truck className="w-4 h-4 text-orange-400" />
            <span>Envío gratis a todo el país superando los <strong>$55.000</strong></span>
          </p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-4 md:gap-8">
          
          <Link to="/" className="flex items-center gap-0 text-3xl font-extrabold text-slate-900 shrink-0 hover:text-slate-700 transition-colors">
            
            <img 
              src="/img/logo.png" 
              alt="Logo Oeste Librería" 
              className="h-16 w-auto object-contain -mr-1" 
            />
            <span className="tracking-tight relative z-10">Oeste<span className="font-light text-slate-500">Librería</span></span>
          </Link>

          <div className="flex-grow w-full md:w-auto order-3 md:order-2">
            <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Buscar por título, autor..." 
                className="w-full border-2 border-slate-300 rounded-l-md py-2 px-4 focus:outline-none focus:border-orange-500 transition-colors text-slate-700"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button type="submit" className="bg-slate-900 text-white px-6 rounded-r-md hover:bg-orange-500 transition-all duration-200 flex items-center justify-center hover:scale-110 active:scale-95">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

            <div className="flex items-center shrink-0 order-2 md:order-3">
            <Link 
                to="/carrito" 
                onClick={() => {
                  setAnimarCarrito(true);
                  setTimeout(() => setAnimarCarrito(false), 300);
                }}
                className="flex items-center gap-2 group"
              >
                <div className={`relative transition-all duration-300 ${animarCarrito ? 'scale-125 text-orange-500' : ''}`}>
                  <ShoppingCart className={`w-7 h-7 text-slate-800 group-hover:text-orange-500 transition-colors ${animarCarrito ? 'animate-pulse text-orange-500' : ''}`} />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {cantidadTotal}
                </span>
              </div>
              <div className="hidden md:flex flex-col ml-3">
                <span className="text-[11px] font-black text-slate-800 tracking-wide">Mi Carrito</span>
                
                <span className="text-sm font-bold text-slate-800 leading-none mt-1">
                  ${precioTotal.toLocaleString('es-AR')}
                </span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}