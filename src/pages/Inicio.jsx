import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import InfoBanner from '../components/InfoBanner';
import AutorDelMes from '../components/AutorDelMes';
import { productos } from '../data/productos';

export default function Inicio() {
  const libroRecomendado = productos.find(p => 
    p.nombre.toLowerCase().includes('retorno del rey')
  );

  return (
    <div className="w-full flex flex-col gap-12">
      
      <Banner />

      <InfoBanner />

      <div className="container mx-auto px-4 pt-16 text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight">
          Bienvenidos a Oeste Librería
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 mb-12 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
          
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-4">
            <span className="font-bold text-orange-600">Somos Oeste Librería</span>, un emprendimiento con sede en Hurlingham, creado por lectores que no se cansan de recomendar libros, de hablar de historias y de creer que la lectura es un cable a tierra en el día a día.
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic">
            "Elegimos cada título con cuidado, como quien arma una biblioteca de a poco, y te lo acercamos a tu casa para que no tengas que salir a buscarlo."
          </p>
        </div>
        
        <Link 
          to="/productos" 
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 hover:-translate-y-1 transition-all shadow-lg mb-4"
        >
          Explorar Catálogo
        </Link>
      </div>
      <AutorDelMes libroRecomendado={libroRecomendado} />

    </div>
  );
}