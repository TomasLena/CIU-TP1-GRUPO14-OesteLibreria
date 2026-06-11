import { Trash2, Plus, Minus } from 'lucide-react';

export default function CarritoItem({ item, actualizarCantidad, eliminarDelCarrito }) {
const subtotal = item.precio * item.cantidad;

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex gap-4 items-center shadow-sm">
        <img src={item.imagen} alt={item.nombre} className="w-20 h-24 object-cover rounded-lg bg-slate-50 border shrink-0" />
        
        <div className="flex-grow min-w-0 flex flex-col justify-between h-full">
            <div>
            <h3 className="font-bold text-slate-900 text-base leading-tight truncate">{item.nombre}</h3>
            <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-1">{item.categoria}</p>
            <p className="text-sm text-slate-400 mt-2">Precio un: ${item.precio.toLocaleString('es-AR')}</p>
            </div>
        </div>

        <div className="flex items-center gap-2 border border-slate-200 rounded-lg p-1 bg-slate-50">
            <button 
            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
            disabled={item.cantidad <= 1}
            className="p-1 text-slate-500 hover:text-orange-500 disabled:opacity-30 transition-colors"
            >
            <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center font-bold text-slate-800 text-sm">{item.cantidad}</span>
            <button 
            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
            disabled={item.cantidad >= item.stock}
            className="p-1 text-slate-500 hover:text-orange-500 disabled:opacity-30 transition-colors"
            >
            <Plus className="w-4 h-4" />
            </button>
        </div>

        <div className="flex flex-col items-end justify-between h-24 shrink-0 pl-2">
            <button 
            onClick={() => eliminarDelCarrito(item.id)}
            className="text-slate-400 hover:text-red-500 transition-colors p-1"
            title="Eliminar producto"
            >
            <Trash2 className="w-5 h-5" />
            </button>
            <span className="font-extrabold text-slate-900 text-base">
            ${subtotal.toLocaleString('es-AR')}
            </span>
        </div>
        </div>
    );
}