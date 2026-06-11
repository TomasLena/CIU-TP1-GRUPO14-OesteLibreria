import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';


export default function ProductoCard({ producto, agregarAlCarrito }) {
  const sinStock = producto.stock === 0;

  return (
    <div className={`bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full ${sinStock ? 'opacity-75' : 'hover:shadow-lg transition-all duration-300'}`}>
      
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className={`w-full h-full object-cover object-center ${sinStock ? 'grayscale opacity-80' : ''}`}
        />
        
        {sinStock && (
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 bg-red-600/90 backdrop-blur-sm text-white text-center font-black py-3 shadow-xl uppercase tracking-[0.2em] z-10 border-y border-red-500">
            Sin stock
          </div>
        )}
        
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider z-10">
          {producto.categoria}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-slate-800 leading-tight mb-2 line-clamp-2" title={producto.nombre}>
          {producto.nombre}
        </h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">
          {producto.descripcion}
        </p>
        
        <div className="flex justify-between items-end mb-5">
          <span className="text-2xl font-extrabold text-slate-900">
            ${producto.precio.toLocaleString('es-AR')}
          </span>
          <span className={`text-xs font-semibold ${sinStock ? 'text-red-500' : 'text-emerald-600'}`}>
            unidades disponibles: {producto.stock}
          </span>
        </div>

        <div className="flex gap-3 mt-auto">
          <Link
            to={`/producto/${producto.id}`}
            className="flex-1 flex justify-center items-center gap-2 bg-slate-100 text-slate-700 py-2.5 rounded-md hover:bg-slate-200 transition-colors text-sm font-bold"
          >
            <Eye className="w-4 h-4" />Ver detalle
          </Link>
          
          <button
            disabled={sinStock}
            onClick={() => agregarAlCarrito(producto)}
            className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-md text-sm font-bold transition-all duration-200 ${
              sinStock
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm hover:scale-[1.09] active:scale-95'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {sinStock ? 'Agotado' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
}