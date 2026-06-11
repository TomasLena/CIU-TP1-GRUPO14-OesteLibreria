import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';

export default function Productos({ agregarAlCarrito }) {
  const [searchParams] = useSearchParams();
  const terminoBusqueda = searchParams.get('q') || '';
  const [orden, setOrden] = useState('defecto');

  let productosMostrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  if (orden === 'menor-mayor') {
    productosMostrados.sort((a, b) => a.precio - b.precio);
  } else if (orden === 'mayor-menor') {
    productosMostrados.sort((a, b) => b.precio - a.precio);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
            {terminoBusqueda ? 'Resultados de búsqueda' : 'Catálogo Completo'}
          </h2>
          {terminoBusqueda ? (
            <p className="text-slate-600 text-lg">
              Mostrando resultados para: <span className="font-bold text-slate-900">"{terminoBusqueda}"</span>
            </p>
          ) : (
            <p className="text-slate-600 text-lg max-w-2xl">
              Explorá nuestra selección de libros.
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto bg-white p-2 rounded-lg shadow-sm border border-slate-200">
          <label htmlFor="ordenar" className="text-sm font-bold text-slate-600 pl-2 whitespace-nowrap">
            Ordenar por:
          </label>
          <select
            id="ordenar"
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium text-slate-700 cursor-pointer"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="defecto">Relevancia</option>
            <option value="menor-mayor">Precio: Menor a Mayor</option>
            <option value="mayor-menor">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>
      
      {productosMostrados.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-2">No encontramos ningún libro</h3>
          <p className="text-slate-500 mb-6">No hay resultados para "{terminoBusqueda}". Probá con otras palabras.</p>
          <Link to="/productos" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
            Ver todo el catálogo
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productosMostrados.map((producto) => (
            <ProductoCard 
              key={producto.id} 
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      )}
    </div>
  );
}