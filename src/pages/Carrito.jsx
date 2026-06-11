import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import CarritoItem from '../components/CarritoItem';

export default function Carrito({ carrito, actualizarCantidad, eliminarDelCarrito, vaciarCarrito }) {
  const navigate = useNavigate();

  const totalGeneral = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const handleConfirmarCompra = () => {
    vaciarCarrito();
    navigate('/confirmacion');
  };

  if (carrito.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-md">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Tu carrito está vacío</h2>
        <p className="text-slate-500 mb-8">Parece que todavía no agregaste ningún libro a tu selección.</p>
        <Link to="/productos" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors w-full shadow-sm">
          Ir al catálogo de libros
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Tu Carrito de Compras</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          
          {carrito.map((item) => (
            <CarritoItem 
              key={item.id}
              item={item}
              actualizarCantidad={actualizarCantidad}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          ))}

          <Link to="/productos" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors pt-4 border-t border-slate-200 w-full mt-4">
            <ArrowLeft className="w-4 h-4" /> Continuar comprando libros
          </Link>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b">Resumen del pedido</h3>
            
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div className="flex justify-between">
                <span>Productos ({cantidadTotal}):</span>
                <span className="font-medium text-slate-900">${totalGeneral.toLocaleString('es-AR')}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío:</span>
                <span className="font-bold text-emerald-600">{totalGeneral >= 55000 ? 'Gratis' : '$4.500'}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline mb-8">
              <span className="text-base font-bold text-slate-900">Total general:</span>
              <span className="text-3xl font-black text-slate-950">
                ${(totalGeneral >= 55000 ? totalGeneral : totalGeneral + 4500).toLocaleString('es-AR')}
              </span>
            </div>

            <button 
              onClick={handleConfirmarCompra}
              className="w-full bg-orange-500 text-white py-3.5 rounded-xl text-center font-bold text-lg hover:bg-orange-600 shadow-md hover:shadow-lg transition-all"
            >
              Confirmar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}