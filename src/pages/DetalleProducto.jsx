import { useParams, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { productos } from '../data/productos';

// Recibimos la prop
export default function DetalleProducto({ agregarAlCarrito }) {
    const { id } = useParams();
    
    const producto = productos.find((p) => p.id === parseInt(id));

    if (!producto) {
        return (
        <main className="min-h-screen bg-[#ebebeb] selection:bg-orange-100 selection:text-orange-900 py-10 flex items-center justify-center">
            <div className="bg-white p-12 rounded-3xl shadow-sm text-center border border-slate-100 max-w-lg w-full mx-4">
            <h2 className="text-xl font-bold text-slate-800">Publicación no encontrada</h2>
            <p className="text-slate-500 mt-2 mb-6">El artículo que buscás no existe o fue eliminado.</p>
            <Link to="/productos" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                Volver al catálogo
            </Link>
            </div>
        </main>
        );
    }

    const inStock = producto.stock > 0;

    return (
        <main className="min-h-screen bg-[#ebebeb] selection:bg-orange-100 selection:text-orange-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-sm text-slate-500 mb-6 flex items-center gap-2">
            <Link to="/productos" className="hover:text-orange-500 font-medium transition-colors">Volver al catálogo</Link>
            <span>/</span>
            <span className="font-semibold text-slate-800">Detalle del Producto</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-8 flex flex-col gap-8">
                
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                    
                    
                    <div className="hidden sm:flex flex-col gap-3 w-16 shrink-0">
                    <div className="w-16 h-16 rounded-xl border-2 border-orange-500 flex items-center justify-center cursor-pointer overflow-hidden p-1">
                        <img src={producto.imagen} alt="Miniatura" className="w-full h-full object-cover" />
                    </div>
                    </div>
                    
                    <div className="flex-1 min-h-[300px] sm:min-h-[450px] flex items-center justify-center bg-white rounded-2xl overflow-hidden relative border border-slate-50">
                    <img 
                        src={producto.imagen} 
                        alt={producto.nombre}
                        className={`max-w-full max-h-[450px] object-contain absolute inset-0 w-full h-full p-4 hover:scale-105 transition-all duration-500 ${!inStock ? 'opacity-50 grayscale' : ''}`}
                    />
                    </div>
                </div>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden p-6 sm:p-8">
                <h2 className="text-2xl font-black text-slate-900 mb-6">Descripción del artículo</h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-wrap text-lg font-medium">
                    {producto.descripcion}
                </div>
                </div>
            </div>

            <div className="lg:col-span-4">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8 sticky top-28">
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">
                    {producto.categoria}
                    </span>
                    
                    {!inStock && (
                    <span className="inline-block bg-red-100 text-red-600 text-[11px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-sm">
                        Agotado
                    </span>
                    )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight uppercase tracking-tight mb-6">
                    {producto.nombre}
                </h1>

                <div className="mb-8">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Precio</p>
                    <p className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tighter">
                    $ {producto.precio.toLocaleString('es-AR')}
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <button
                    disabled={!inStock}
                    onClick={() => agregarAlCarrito(producto)}
                    className={`w-full flex justify-center items-center gap-3 py-4 rounded-xl text-xl font-bold transition-all ${
                        !inStock
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                    >
                    <ShoppingCart className="w-6 h-6" />
                    {!inStock ? 'Sin unidades disponibles' : 'Agregar al carrito'}
                    </button>
                    
                    {inStock && (
                    <p className="text-center text-xs text-slate-500 font-medium mt-4 bg-slate-50 py-2 rounded-lg border border-slate-100">
                        unidades disponibles: <span className="font-bold text-slate-700">{producto.stock} unidades</span>
                    </p>
                    )}
                </div>

                </div>
            </div>

            </div>
        </div>
        </main>
    );
}